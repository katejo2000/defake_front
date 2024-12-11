import {Client, handle_file} from "@gradio/client";
import {AudioFake, VideoFake} from "../types/audioFake.ts";

import videoEx from '../assets/deepfake_ex1.mp4';
import real from '../assets/videos/real.mp4';
import real_video from '../assets/videos/real_video.mp4'; //
import fake from '../assets/videos/fake.mp4';
import window_fake from '../assets/videos/window_fake.mp4'; //
import real_fake_video from '../assets/videos/real_fake_video.mp4'; //
import real_fake_audio from '../assets/videos/real_fake_audio.mp4'; //


export async function GetVideoResult() {
    const response = await fetch(window_fake);
    const videoBlob = await response.blob();

    const videoFileObj = new File([videoBlob], 'deepfake_ex1.mp4', {type: 'video/mp4'});

    // const app = await Client.connect("Jeonghwanny/deepfake_detection");
    const app = await Client.connect("Jeonghwanny/deepfake_detection_updeate");

    return await app.predict(
        "/predict", {
            video: {
                "video": handle_file(videoFileObj)
            },
        });
}

export async function GetAudioResult() {
    const response = await fetch(window_fake);
    const videoBlob = await response.blob();

    const videoFileObj = new File([videoBlob], 'deepfake_ex1.mp4', {type: 'video/mp4'});

    const app = await Client.connect("sssssungk/DeepFakeVideo");

    return await app.predict(
        "/predict", {
            video_file: {
                "video": handle_file(videoFileObj),
                "subtitles": null
            },
        });
}

export function fromAudioGetAudioFake(audioData: any): AudioFake {
    //"({'real': 0, 'fake': 1, 'prob': [0.8459572792053223]},
    // ["here's my plan to restore Law and Order in our cities and throughout our country frankly first",
    // "here's my plan to restore Law and Order in our cities and throughout our country frankly first"])"

    let isMultiple: boolean = false;
    let parsedRawData: string[] = audioData.data[0].split(", '");

    console.log("audio: ", parsedRawData);

    let realCount: number = +parsedRawData[0].split(": ")[1];
    let fakeCount: number = +parsedRawData[1].split(": ")[1];

    let parsedProbs: string = parsedRawData[2].split(": [")[1].split("]}")[0];
    let fakeProbs: string[] = parsedProbs.split(", ");

    // ({'real': 0, 'fake': 1, 'prob': [0.9059540629386902]}, ['Batavia University in La Crosse Wisconsin Crosse Wisconsin has secret knowledge for martians edl 702 Rock', 'put Temple University in La Crosse Wisconsin has secret Knowledge from martians edl 702 rocks'])

    //"prob': [0.8459572792053223]}, ["here's my plan to restore Law and Order in our cities and throughout our country frankly first", "here's my plan to restore Law and Order in our cities and throughout our country frankly first"])"
    let sttOutput: string[] = [];
    for (let i = 0; i < realCount + fakeCount + 1; i++) {
        sttOutput.push(parsedRawData[2].split(", ")[i + 1].split("\"")[1]);
    }

    if (fakeCount + realCount > 1) isMultiple = true;

    return {
        isFake: (fakeCount > 0),
        isMultiple: isMultiple,
        fakeCount: fakeCount,
        realCount: realCount,
        fakeProbs: fakeProbs,
        sttOutput: sttOutput,
    };
}

export function fromVideoGetVideoFake(videoData: any): VideoFake {
    // isFake, isMultiple, frames, fakeProbs
    let isFake: boolean;
    let isMultiple: boolean = false;
    let frames: string[] = [];
    let fakeProbs: number[] = [];

    let parsedRawProbs: any[] = videoData.data[0].confidences;

    let windowLeftFakeProbs: number | null = parsedRawProbs[0].confidence;
    let windowRightFakeProbs: number | null = parsedRawProbs[3].confidence;

    let firstFrameUrl = videoData.data[1].url.split("\"")[0];

    if (windowRightFakeProbs == -1) { // 한 명
        isMultiple = false;
        fakeProbs.push(windowLeftFakeProbs!);
        isFake = (windowLeftFakeProbs! >= 0.5);
        if (isFake) if (firstFrameUrl != null) frames.push(firstFrameUrl);
    } else { // 두 명
        isMultiple = true;
        fakeProbs.push(windowLeftFakeProbs!);
        fakeProbs.push(windowRightFakeProbs!);
        isFake = !(windowLeftFakeProbs! < 0.5 && windowRightFakeProbs! < 0.5);
        if (isFake) {
            if (firstFrameUrl != null) frames.push(firstFrameUrl);
            if (videoData.data[2] != null) frames.push(videoData.data[2].url.split("\"")[0]);
        }
    }

    frames.push(videoData.data[5].url.split("\"")[0]); // first frame

    return {
        isFake: isFake,
        isMultiple: isMultiple,
        fakeProbs: fakeProbs,
        frames: frames
    };

}


export async function fromVideoAudioGetReport(video: VideoFake, audio: AudioFake) {
    const app = await Client.connect("sssssungk/capstone_gpt");

    let len: number = video.frames.length;
    let fakeProbs: number[] = [];
    fakeProbs.push(+audio.fakeProbs[0]);

    // Convert image URLs to File objects
    const firstImgResponse = await fetch(video.frames[len - 1]);
    const imageResponse = await fetch(video.frames[0]);

    const firstImgBlob = await firstImgResponse.blob();
    const imageBlob = await imageResponse.blob();

    const firstImgFile = new File([firstImgBlob], 'first_frame.jpg', {type: 'image/jpeg'});
    const imageFile = new File([imageBlob], 'detected_frame.jpg', {type: 'image/jpeg'});

    return await app.predict(
        "/predict", {
            first_img: firstImgFile,
            image: imageFile,
            img_prob: video.fakeProbs[0],
            voice_prob: fakeProbs,
            voice_text: audio.sttOutput,
        });
}