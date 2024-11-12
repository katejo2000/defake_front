import {Button, Stack, Typography, useTheme} from "@mui/material";
import {ImageNotSupported} from "@mui/icons-material";

type ResultType = {
    video: number[];
    audio: number;
    isMultiple: boolean;
};

export default function DeepFakeResult({video, audio, isMultiple}: ResultType) {
    const theme = useTheme();

    return (
        <div style={{}}>
            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"}
                   style={{marginLeft: 200, marginBottom: 10}}>
                <Typography style={{fontSize: 24}} color={theme.palette.error.main}>Deepfake Detected for</Typography>
                <Button
                    variant={"outlined"}
                    style={{marginLeft: 20}}
                    onClick={() => {
                        alert("This will redirect you to... ");
                    }}
                >
                    Original Link
                </Button>
            </Stack>

            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 150}}>
                <Typography style={{width: 300}}>
                    Possibility of being a Deepfake
                </Typography>
                <Stack direction={"column"} style={{margin: 20}}>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography>Video:</Typography>
                        {isMultiple
                            ?
                            <>
                                <Stack direction={"column"} style={{margin: 10}} alignItems={"start"}>
                                    <Typography>Left Person: {video[0]}</Typography>
                                    <Typography>Right Person: {video[1]}</Typography>
                                </Stack>
                            </>
                            : <Typography style={{margin: 10}}>{video[0]}</Typography>
                        }
                    </Stack>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography >Audio:</Typography>
                        <Typography style={{margin: 10}}>{audio}</Typography>
                    </Stack>

                </Stack>
            </Stack>

            {/*todo: audio to text output*/}

            {/*<Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 200}}>*/}
            {/*    <Typography style={{width: 300}}>*/}
            {/*        Audio to Text Output*/}
            {/*    </Typography>*/}
            {/*    <>*/}
            {/*        <Typography style={{margin: 20}}>like it's kind of far out but what about like a bubble gum or what*/}
            {/*            if it's something*/}
            {/*            like a drink that you just had to take I think sometimes people feel like</Typography>*/}
            {/*    </>*/}
            {/*</Stack>*/}
            {/* todo: deepfake suspected frames*/}
            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 150}}>
                <Typography style={{width: 300}}>
                    Deepfake Suspected Frames:
                </Typography>
                <>
                    <ImageNotSupported></ImageNotSupported>
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