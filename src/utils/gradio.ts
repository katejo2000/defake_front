import {Client, handle_file} from "@gradio/client";
// import video1 from '../assets/mqzvfufzoq.mp4';
// import video2 from '../assets/lynaeydofd.mp4';
import videoEx from '../assets/deepfake_ex1.mp4';
import {AudioFake, VideoFake} from "../types/audioFake.ts";


export async function GetVideoResult() {
    const response = await fetch(videoEx);
    // const response = await fetch(video2);
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
    const response = await fetch(videoEx);
    // const response = await fetch(video2);
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

    let parsedRawData: string[] = audioData.data[0].split(", '");

    console.log("audio: ", parsedRawData);

    let realCount: number = +parsedRawData[0].split(": ")[1];
    let fakeCount: number = +parsedRawData[1].split(": ")[1];

    let parsedProbs: string = parsedRawData[2].split(": [")[1].split("]}")[0];
    let fakeProbs: string[] = parsedProbs.split(", ");

    let sttOutput: string[] = [];
    for (let i = 0; i < realCount + fakeCount + 1; i++) {
        sttOutput.push(parsedRawData[2].split(", ")[i + 1].split("\"")[1]);
    }

    return {
        isFake: (fakeCount > 0),
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

    console.log("video: ", videoData.data);

    let parsedRawProbs: any[] = videoData.data[0].confidences;

    let windowLeftFakeProbs: number | null = parsedRawProbs[0].confidence;
    let windowRightFakeProbs: number | null = parsedRawProbs[3].confidence;

    let firstFrameUrl = videoData.data[1].url.split("\"")[0];
    console.log(firstFrameUrl);

    let secondFrameUrl = '';

    // if (videoData.data[2].url) {
    //     secondFrameUrl = videoData.data[2].url.split("\"")[0];
    //     console.log(secondFrameUrl);
    // }


    if (windowRightFakeProbs == null) { // 한 명
        isMultiple = false;
        fakeProbs.push(windowLeftFakeProbs!);
        isFake = (windowLeftFakeProbs! >= 0.5);
        if (isFake) if (firstFrameUrl != null) frames.push(firstFrameUrl.url);
    } else { // 두 명
        isMultiple = true;
        fakeProbs.push(windowLeftFakeProbs!);
        fakeProbs.push(windowRightFakeProbs!);
        isFake = !(windowLeftFakeProbs! < 0.5 && windowRightFakeProbs! < 0.5);
        if (isFake) {
            if (firstFrameUrl != null) frames.push(firstFrameUrl);
            if (videoData.data[2].url.split("\"")[0] != null) frames.push(secondFrameUrl);
        }
    }

    return {
        isFake: isFake,
        isMultiple: isMultiple,
        fakeProbs: fakeProbs,
        frames: frames
    };

}