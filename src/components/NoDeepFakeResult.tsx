import {Stack, Typography, useTheme} from "@mui/material";
import {ResultType} from "../types/resultType.ts";
import {COMMENT, HEADER_FONT_20, HEADER_FONT_28, RESULT_STACK, RESULT_TITLE} from "../theme/styles.ts";
import OriginalLinkButton from "./widgets/OriginalLinkButton.tsx";
// import prohibition from "../assets/prohibition.png";
import checked from "../assets/checked.png";
import ResultPageImage from "./widgets/ResultPageImage.tsx";

export default function NoDeepFakeResult({video, audio}: ResultType) {
    const theme = useTheme();

    return (
        <>
            <div style={{position: 'relative', marginLeft: 100, marginBottom: 30}}>
                <ResultPageImage image={checked} alt={"Approved"}></ResultPageImage>
                <Stack
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    style={{position: 'relative', zIndex: 2}}
                >
                    <Typography
                        sx={HEADER_FONT_28}
                        style={{fontWeight: "bold"}}
                        color={theme.palette.primary.main}
                    >
                        De-Fake proved for
                    </Typography>
                    <OriginalLinkButton url={"www.google.com"} isDeepfake={false}></OriginalLinkButton>
                </Stack>
            </div>

            <Stack sx={RESULT_STACK}>
                <Typography sx={RESULT_TITLE}>
                    Possibility of being a Deepfake
                </Typography>
                <Stack direction={"column"} style={{margin: 20}}>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography sx={HEADER_FONT_20}>Video:</Typography>
                        {video.isMultiple
                            ?
                            <>
                                <Stack direction={"column"} style={{marginLeft: 30}} alignItems={"start"}>

                                    {video.fakeProbs[1] * 100 < 0
                                        ?
                                        <Typography sx={HEADER_FONT_20}
                                                    color={(video.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
                                            {(video.fakeProbs[0] * 100).toFixed(1)}%
                                        </Typography>
                                        :
                                        <Typography sx={HEADER_FONT_20}
                                                    color={(video.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
                                            Left Person: {(video.fakeProbs[0] * 100).toFixed(1)}%
                                        </Typography>
                                    }


                                    {
                                        video.fakeProbs[1] * 100 < 0
                                            ?
                                            <></>
                                            :
                                            <Typography sx={HEADER_FONT_20}
                                                        color={(video.fakeProbs[1] * 100 > 50) ? "error" : "primary"}>
                                                Right Person: {(video.fakeProbs[1] * 100).toFixed(1)}%
                                            </Typography>
                                    }

                                </Stack>
                            </>
                            : <Typography sx={HEADER_FONT_20} style={{margin: 10}}>{video.fakeProbs[0]}</Typography>
                        }
                    </Stack>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography sx={HEADER_FONT_20}>Audio:</Typography>
                        <Typography sx={HEADER_FONT_20} style={{marginLeft: 30}}
                                    color={(+audio.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
                            {(+audio.fakeProbs[0] * 100).toFixed(1)}%
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>

            <Stack sx={RESULT_STACK}>
                <Typography sx={RESULT_TITLE}>
                    Audio to Text Output
                </Typography>
                <>
                    <Stack direction={"column"} style={{maxWidth: 500}}>
                        {/*{+audio.fakeProbs[0] > 0.5 ?*/}


                        <Typography sx={HEADER_FONT_20}
                                    style={{
                                        margin: 20,
                                        marginLeft: 30,
                                        textAlign: "start"
                                    }}>{audio.sttOutput[0]}</Typography>

                        {/*// : <></>*/}
                        {/*}*/}
                        {+audio.fakeProbs[1] > 0.5 ?
                            <Typography sx={HEADER_FONT_20}
                                        style={{
                                            margin: 20,
                                            marginLeft: 30,
                                            textAlign: "start"
                                        }}>{audio.sttOutput[1]}</Typography> : <></>}
                    </Stack>
                </>
            </Stack>

            <Typography sx={COMMENT}>
                We think this video does not have deepfake generated content in it.<br/><br/>
                Still, be sure to check twice on what you believe!
            </Typography>

        </>
    )
}