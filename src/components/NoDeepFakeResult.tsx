import {Button, Stack, Typography} from "@mui/material";

export default function NoDeepFakeResult() {
    return (
        <>
            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"}
                   style={{marginLeft: 200, marginBottom: 50}}>
                <Typography style={{fontSize: 24}}>De-Fake proved for</Typography>
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