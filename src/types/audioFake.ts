// isFake? how many people? how many Fake? fake probs
export type AudioFake = {
    isFake: boolean;
    fakeCount: number;
    realCount: number;
    fakeProbs: string[];
    sttOutput: string[];
}

// isFake? two people? frames? fake probs
export type VideoFake = {
    isFake: boolean;
    isMultiple: boolean;
    frames: string[];
    fakeProbs: number[];
}