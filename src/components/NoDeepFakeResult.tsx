import {Stack, Typography, useTheme} from "@mui/material";
import {ResultType} from "../types/resultType.ts";
import {RESULT_TITLE} from "../theme/styles.ts";
import OriginalLinkButton from "./OriginalLinkButton.tsx";

export default function NoDeepFakeResult({video, audio}: ResultType) {
    const theme = useTheme();

    return (
        <>
            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"}
                   style={{marginLeft: 200, marginBottom: 50}}>
                <Typography style={{fontSize: 24}} color={theme.palette.primary.main}>De-Fake proved for</Typography>
                <OriginalLinkButton url={"www.google.com"} isDeepfake={false}></OriginalLinkButton>
            </Stack>

            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 150}}>
                <Typography sx={RESULT_TITLE}>
                    Possibility of being a Deepfake
                </Typography>
                <Stack direction={"column"} style={{margin: 20}}>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography>Video:</Typography>
                        {video.isMultiple
                            ?
                            <>
                                <Stack direction={"column"} style={{margin: 10}} alignItems={"start"}>
                                    <Typography>Left Person: {video.fakeProbs[0]}</Typography>
                                    <Typography>Right Person: {video.fakeProbs[1]}</Typography>
                                </Stack>
                            </>
                            : <Typography style={{margin: 10}}>{video.fakeProbs[0]}</Typography>
                        }
                    </Stack>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography>Audio:</Typography>
                        <Typography style={{margin: 10}}>{audio.fakeProbs[0]}</Typography>
                    </Stack>

                </Stack>
            </Stack>

            {/*todo: audio to text output*/}

            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 150}}>
                <Typography sx={RESULT_TITLE}>
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


            <div style={{marginTop: 50}}>
                <Typography style={{margin: 20, fontSize: 18}}>
                    We think this video does not have deepfake generated content in it.
                </Typography>
                <Typography style={{margin: 20, fontSize: 18}}>
                    Still, be sure to check twice on what you believe!
                </Typography>
            </div>

        </>
    )
}