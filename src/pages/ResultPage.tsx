import {useLocation, useNavigate} from "react-router-dom";
import {Stack} from "@mui/material";
import NoDeepFakeResult from "../components/NoDeepFakeResult.tsx";
import DeepFakeResult from "../components/DeepFakeResult.tsx";
import {AudioFake, VideoFake} from "../types/audioFake.ts";
import {fromAudioGetAudioFake, fromVideoGetVideoFake} from "../utils/gradio.ts";
import Title from "../components/Title.tsx";
import LargeButton from "../components/LargeButton.tsx";

export default function ResultPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const {audio, video} = location.state || {};

    let audioFake: AudioFake = fromAudioGetAudioFake(audio);
    let videoFake: VideoFake = fromVideoGetVideoFake(video);

    const handleMainPage = () => {
        navigate('/');
    }

    // const handleGetCertificate = () => {
    //     navigate('/');
    // }

    const handleFileReport = () => {
        navigate('/');
    }

    return (
        <>
            <Title text={"Result"}></Title>
            {
                (audioFake.isFake || videoFake.isFake)
                    ? <DeepFakeResult
                        audio={audioFake}
                        video={videoFake}
                    >
                    </DeepFakeResult>
                    : <NoDeepFakeResult
                        audio={audioFake}
                        video={videoFake}
                    >
                    </NoDeepFakeResult>
            }

            <Stack direction={"row"} sx={{marginTop: '50px', alignItems: 'center', justifyContent: 'center'}}>
                <LargeButton func={handleMainPage} title={"Main Page"}></LargeButton>
                {
                    (audioFake.isFake || videoFake.isFake)
                        ? <LargeButton func={handleFileReport} title={"File a Report"} contained={true}></LargeButton>
                        : <></> // <LargeButton func={handleGetCertificate} title={"Get Certificate"}></LargeButton>
                }
            </Stack>
        </>
    );
}