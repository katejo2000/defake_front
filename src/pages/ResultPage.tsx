import {useLocation, useNavigate} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";
import NoDeepFakeResult from "../components/NoDeepFakeResult.tsx";
import DeepFakeResult from "../components/DeepFakeResult.tsx";
import {AudioFake, VideoFake} from "../types/audioFake.ts";
import {fromAudioGetAudioFake, fromVideoGetVideoFake} from "../utils/gradio.ts";

export default function ResultPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const {audio, video} = location.state || {};

    let audioFake: AudioFake = fromAudioGetAudioFake(audio);
    let videoFake: VideoFake = fromVideoGetVideoFake(video);

    const handleMainPage = () => {
        navigate('/');
    }

    const handleGetCertificate = () => {
        navigate('/');
    }

    const handleFileReport = () => {
        navigate('/');
    }

    return (
        <>
            <Typography
                variant="h1"
                color="primary"
                sx={{margin: 4}}
                fontSize={68}
            >Result</Typography>
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
                <Button
                    variant={"outlined"}
                    sx={{margin: 2}}
                    onClick={handleMainPage}
                    size={"large"}
                >
                    Main Page
                </Button>
                {
                    (audioFake.isFake || videoFake.isFake)
                        ? <Button
                            variant={"contained"}
                            sx={{margin: 2}}
                            onClick={handleFileReport}
                            size={"large"}
                        >
                            File a Report
                        </Button>
                        : <Button
                            variant={"contained"}
                            sx={{margin: 2}}
                            onClick={handleGetCertificate}
                            size={"large"}
                        >
                            Get Certificate
                        </Button>
                }
            </Stack>
        </>
    );
}