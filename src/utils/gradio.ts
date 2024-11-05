import {Client} from "@gradio/client";

export default async function GetLog() {
    try {
        // const app = await Client.connect("abidlabs/en2fr");
        // const result = await app.predict("/predict", ["Hello"]);
        // return await result;

        const app = await Client.connect("katejo2000/defake_test");

        const result = await app.predict(
            "/predict", {
                name: "경현",
            });
        return await result;

    } catch (error) {
        throw error;
    }
}

// export default async function GetResult() {
//     const response = await fetch(
//             "https://github.com/audio-samples/audio-samples.github.io/raw/master/samples/wav/ted_speakers/SalmanKhan/sample-1.wav",
//             {
//                 mode: 'no-cors'
//             }
//         );
//     const audio_file = await response.blob();
//
//     const app = await Client.connect("abidlabs/whisper");
//
//     const transcription = await app.predict("/predict", [handle_file(audio_file)]);
//
//     console.log(transcription.data);
//     ["I said the same phrase 30 times."]
// }
