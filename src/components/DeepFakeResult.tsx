import {Button, Stack, Typography, useTheme} from "@mui/material";
import {ResultType} from "../types/resultType.ts";
import OriginalLinkButton from "./OriginalLinkButton.tsx";

export default function DeepFakeResult({video, audio}: ResultType) {
    const theme = useTheme();

    return (
        <div style={{}}>
            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"}
                   style={{marginLeft: 200, marginBottom: 10}}>
                <Typography style={{fontSize: 24}} color={theme.palette.error.main}>Deepfake Detected for</Typography>
                <OriginalLinkButton url={"www.google.com"}></OriginalLinkButton>
            </Stack>

            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 150}}>
                <Typography style={{width: 300}}>
                    Possibility of being a Deepfake
                </Typography>
                <Stack direction={"column"} style={{margin: 20}}>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography>Video:</Typography>
                        {video.isMultiple
                            ?
                            <>
                                <Stack direction={"column"} style={{margin: 10}} alignItems={"start"}>
                                    <Typography>Left Person: {(video.fakeProbs[0]*100).toFixed(1)}%</Typography>
                                    <Typography>Right Person: {(video.fakeProbs[1]*100).toFixed(1)}%</Typography>
                                </Stack>
                            </>
                            : <Typography style={{margin: 10}}>{video.fakeProbs[0]}</Typography>
                        }
                    </Stack>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography>Audio:</Typography>
                        <Typography style={{margin: 10}}>{(+audio.fakeProbs[0] * 100).toFixed(1)}%</Typography>
                    </Stack>

                </Stack>
            </Stack>

            {/*todo: audio to text output*/}

            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 150}}>
                <Typography style={{width: 300}}>
                    Audio to Text Output
                </Typography>
                <>
                    <Stack direction={"column"}>
                        {+audio.fakeProbs[0] > 0.5 ?
                            <Typography style={{margin: 20}}>{audio.sttOutput[0]}</Typography> : <></>}
                        {+audio.fakeProbs[1] > 0.5 ?
                            <Typography style={{margin: 20}}>{audio.sttOutput[1]}</Typography> : <></>}
                    </Stack>
                </>
            </Stack>

            {/* todo: deepfake suspected frames*/}
            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 150}}>
                <Typography style={{width: 300}}>
                    Deepfake Suspected Frames:
                </Typography>
                <>
                    {/*<ImageNotSupported></ImageNotSupported>*/}
                    {video.fakeProbs[0] > 0.5 ? <img src={video.frames[0]} alt={"image not supported"}/> : <></>}
                    {video.fakeProbs[1] > 0.5 ? <img src={video.frames[1]} alt={"image not supported"}/> : <></>}

                </>
            </Stack>

            <div style={{marginTop: 50}}>
                <Typography style={{margin: 20, fontSize: 18}}>
                    We think this video has deepfake generated content in it.
                </Typography>
                <Typography style={{margin: 20, fontSize: 18}}>
                    There are several contexts that deepfake content can be used with malicious intent.
                </Typography>
                <Typography style={{margin: 20, fontSize: 18}}>
                    If you think that this video is related to a certain topic, please click on the topic below.
                </Typography>
            </div>

            <Stack direction={"column"} alignItems={"center"}>
                <Button variant={"outlined"} style={{width: 300, marginTop: 20}}>
                    Sexual Crimes
                </Button>
                <Button variant={"outlined"} style={{width: 300, marginTop: 20}}>
                    Election Law Violations
                </Button>
            </Stack>

        </div>
    )
}