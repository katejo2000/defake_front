import {Button, Stack, Typography} from "@mui/material";
import {ImageNotSupported} from "@mui/icons-material";

export default function DeepFakeResult() {
    return (
        <div style={{}}>
            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"}
                   style={{marginLeft: 200, marginBottom: 50}}>
                <Typography style={{fontSize: 24}}>Deepfake Detected for</Typography>
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

            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 200}}>
                <Typography>
                    Possibility of being a Deepfake
                </Typography>
                <Stack direction={"column"} style={{margin: 20}}>
                    <Typography>Video:</Typography>
                    <Typography>Audio:</Typography>
                </Stack>
            </Stack>

            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 200}}>
                <Typography style={{width: 300}}>
                    Audio to Text Output
                </Typography>
                <>
                    <Typography style={{margin: 20}}>like it's kind of far out but what about like a bubble gum or what
                        if it's something
                        like a drink that you just had to take I think sometimes people feel like</Typography>
                </>
            </Stack>

            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} style={{marginLeft: 200}}>
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
                <Button variant={"outlined"} style={{width: 300}}>
                    Sexual Crimes
                </Button>
                <Button variant={"outlined"} style={{width: 300}}>
                    Election Law Violations
                </Button>
            </Stack>

        </div>
    )
}