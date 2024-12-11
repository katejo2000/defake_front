import {useLocation, useNavigate} from "react-router-dom";
import {Stack} from "@mui/material";
import NoDeepFakeResult from "../components/NoDeepFakeResult.tsx";
import DeepFakeResult from "../components/DeepFakeResult.tsx";
import {AudioFake, VideoFake} from "../types/audioFake.ts";
import {fromAudioGetAudioFake, fromVideoAudioGetReport, fromVideoGetVideoFake} from "../utils/gradio.ts";
import Title from "../components/widgets/Title.tsx";
import LargeButton from "../components/widgets/LargeButton.tsx";

export default function ResultPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const {audio, video, url} = location.state || {};

    let audioFake: AudioFake = fromAudioGetAudioFake(audio);
    let videoFake: VideoFake = fromVideoGetVideoFake(video);

    const handleMainPage = () => {
        navigate('/');
    }

    const handleFileReport = () => {
        navigate('/download', {
            state: {
                isLoading: true
            }
        });
        
        fromVideoAudioGetReport(videoFake, audioFake).then(r => {
            console.log(r);
            navigate('/download', {
                state: {
                    reportData: r,
                    isLoading: false
                }
            });
        }).catch(error => {
            console.error('Error generating report:', error);
            navigate('/error');
        });
    };

    return (
        <>
            <Title text={"Result"}></Title>
            {
                (audioFake.isFake || videoFake.isFake)
                    ? <DeepFakeResult
                        audio={audioFake}
                        video={videoFake}
                        url={url}
                    >
                    </DeepFakeResult>
                    : <NoDeepFakeResult
                        audio={audioFake}
                        video={videoFake}
                        url={url}
                    >
                    </NoDeepFakeResult>
            }

            <Stack direction={"row"}
                   sx={{marginTop: '50px', marginBottom: '50px', alignItems: 'center', justifyContent: 'center'}}>
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