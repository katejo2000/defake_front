import {useLocation, useNavigate} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";
import NoDeepFakeResult from "../components/NoDeepFakeResult.tsx";
import DeepFakeResult from "../components/DeepFakeResult.tsx";

export default function ResultPage() {

    const location = useLocation();
    const navigate = useNavigate();

    let isMultiplePerson = false;

    const {audioData, videoData} = location.state || {};

    let isAudioFake: number = +audioData?.data[0].slice(20, 21);
    let audioResult: number = +audioData?.data[0].slice(32, 36);

    let isVideoFake: number = 0;
    let videoResult: number[] = [];

    let video: any[] = videoData?.data[0].confidences;
    console.log(video);
    console.log(video[0].label); // Left Person Fake Probability OR Real Probability


    if (video[0].label === "Real Probability") {
        videoResult.push(video[1].confidence);
        if (video[1].confidence > 0.5) {
            isVideoFake = 1;
        }
    } else {
        isMultiplePerson = true;
        videoResult.push(video[0].confidence, video[1].confidence);
        if (video[0].confidence > 0.5 || video[1].confidence > 0.5) {
            isVideoFake = 1;
        }
    }


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
            <Typography variant={"h2"} style={{margin: 20}}>Result</Typography>
            {
                (isVideoFake || isAudioFake)
                    ? <DeepFakeResult
                        audio={audioResult}
                        video={videoResult}
                        isMultiple={isMultiplePerson}>
                    </DeepFakeResult>
                    : <NoDeepFakeResult
                        audio={audioResult}
                        video={videoResult}
                        isMultiple={isMultiplePerson}>
                    </NoDeepFakeResult>
            }

            <Stack direction={"row"} sx={{marginTop: '50px', alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    variant={"outlined"}
                    sx={{margin: 2}}
                    onClick={handleMainPage}
                >
                    Main Page
                </Button>
                {
                    (isVideoFake || isAudioFake)
                        ? <Button
                            variant={"contained"}
                            sx={{margin: 2}}
                            onClick={handleFileReport}
                        >
                            File a Report
                        </Button>
                        : <Button
                            variant={"contained"}
                            sx={{margin: 2}}
                            onClick={handleGetCertificate}
                        >
                            Get Certificate
                        </Button>
                }
            </Stack>
        </>
    );
}