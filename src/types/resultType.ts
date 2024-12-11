import {AudioFake, VideoFake} from "./audioFake.ts";

export type ResultType = {
    video: VideoFake;
    audio: AudioFake;
    url: string;
};