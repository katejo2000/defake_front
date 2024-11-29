import {Stack, Typography, useTheme} from "@mui/material";
import {ResultType} from "../types/resultType.ts";
import OriginalLinkButton from "./OriginalLinkButton.tsx";
import {HEADER_FONT_20, HEADER_FONT_28, RESULT_STACK, RESULT_TITLE} from "../theme/styles.ts";
import DeepfakeTopicButton from "./DeepfakeTopicButton.tsx";
import prohibition from '../assets/prohibition.png';

export default function DeepFakeResult({video, audio}: ResultType) {
    const theme = useTheme();

    return (
        <div style={{}}>
            <div style={{position: 'relative', marginLeft: 100, marginBottom: 10}}>
                <img
                    src={prohibition}
                    alt="prohibition"
                    style={{
                        position: 'absolute',
                        height: '400%',
                        opacity: 0.2,
                        left: '-40px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1
                    }}
                />
                <Stack
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    style={{position: 'relative', zIndex: 2}}
                >
                    <Typography
                        sx={HEADER_FONT_28}
                        style={{fontWeight: "bold"}}
                        color={theme.palette.error.main}
                    >
                        Deepfake Detected for
                    </Typography>
                    <OriginalLinkButton url={"www.google.com"} isDeepfake={true}></OriginalLinkButton>
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
                                    <Typography sx={HEADER_FONT_20}
                                                color={(video.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
                                        Left Person: {(video.fakeProbs[0] * 100).toFixed(1)}%
                                    </Typography>
                                    <Typography sx={HEADER_FONT_20}
                                                color={(video.fakeProbs[1] * 100 > 50) ? "error" : "primary"}>
                                        Right Person: {(video.fakeProbs[1] * 100).toFixed(1)}%
                                    </Typography>
                                </Stack>
                            </>
                            : <Typography sx={HEADER_FONT_20} style={{margin: 10}}>{video.fakeProbs[0]}</Typography>
                        }
                    </Stack>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography sx={HEADER_FONT_20}>Audio:</Typography>
                        <Typography sx={HEADER_FONT_20} style={{marginLeft: 30}} color={(+audio.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
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
                        {+audio.fakeProbs[0] > 0.5 ?
                            <Typography sx={HEADER_FONT_20}
                                        style={{
                                            margin: 20,
                                            textAlign: "start"
                                        }}>{audio.sttOutput[0]}</Typography> : <></>}
                        {+audio.fakeProbs[1] > 0.5 ?
                            <Typography sx={HEADER_FONT_20}
                                        style={{
                                            margin: 20,
                                            textAlign: "start"
                                        }}>{audio.sttOutput[1]}</Typography> : <></>}
                    </Stack>
                </>
            </Stack>

            <Stack sx={RESULT_STACK}>
                <Typography sx={RESULT_TITLE}>
                    Deepfake Suspected Frames
                </Typography>
                <>
                    {/*<ImageNotSupported></ImageNotSupported>*/}
                    {video.fakeProbs[0] > 0.5 ? <img src={video.frames[0]} alt={"image not supported"} style={{
                        maxWidth: '200px',
                        maxHeight: '200px',
                        objectFit: 'contain'
                    }}/> : <></>}
                    {video.fakeProbs[1] > 0.5 ? <img src={video.frames[1]} alt={"image not supported"} style={{
                        maxWidth: '200px',
                        maxHeight: '200px',
                        objectFit: 'contain'
                    }}/> : <></>}
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
                <DeepfakeTopicButton
                    onClick={() => {
                    }}
                    title={"Sexual Crimes"}
                ></DeepfakeTopicButton>
                <DeepfakeTopicButton
                    title={"Election Law Violations"}
                    onClick={() => {
                    }}
                ></DeepfakeTopicButton>
            </Stack>

        </div>
    )
}