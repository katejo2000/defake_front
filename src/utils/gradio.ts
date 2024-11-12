import {Client, handle_file} from "@gradio/client";
// import video1 from '../assets/mqzvfufzoq.mp4';
import video2 from '../assets/lynaeydofd.mp4';
import videoEx from '../assets/deepfake_ex1.mp4';


export async function GetVideoResult() {
    // const response = await fetch(videoEx);
    const response = await fetch(video2);
    const videoBlob = await response.blob();

    const videoFileObj = new File([videoBlob], 'deepfake_ex1.mp4', {type: 'video/mp4'});

    const app = await Client.connect("Jeonghwanny/deepfake_detection");

    return await app.predict(
        "/predict", {
            file_obj: {
                "video": handle_file(videoFileObj),
                "subtitles": null
            },
        });
}

export async function GetAudioResult() {
    // const response = await fetch(videoEx);
    const response = await fetch(video2);
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