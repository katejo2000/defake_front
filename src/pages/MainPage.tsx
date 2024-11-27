import {useNavigate} from 'react-router-dom';
import {Button, FormControl, Input, Stack, Typography} from "@mui/material";
import {GetAudioResult, GetVideoResult} from "../utils/gradio.ts";


export default function MainPage() {
    const navigate = useNavigate();

    const handleDetect = () => {
        navigate('/loading');

        Promise.all([
            GetAudioResult(),
            GetVideoResult()
        ]).then(([audio, video]) => {
            navigate('/result', {
                state: {
                    audio: audio,
                    video: video
                }
            });
        }).catch(error => {
            console.error('Error getting results:', error);
            navigate('/error')
        });
    }

    return (
        <>
            <Typography
                variant="h1"
                color="primary"
                sx={{margin: 6}}
                fontSize={68}
            >
                De-Fake
            </Typography>
            <Typography style={{margin: 40, fontSize: 20}}>Upload a video and select a model to check for Deepfake
                results.</Typography>
            <FormControl sx={{display: "block", margin: 2}}>
                <Stack direction={"row"} style={{padding: 10, justifyContent: "center"}}>
                    <Typography style={{padding: 10, width: 50}}>URL</Typography>
                    <Input style={{
                        backgroundColor: '#ffffff', borderColor: '#eeeeee', width: '400px', height: '40px',
                        borderWidth: '1px', borderRadius: '10px', paddingLeft: '10px'
                    }}></Input>
                </Stack>
            </FormControl>

            <Stack direction={"row"} sx={{marginTop: '20px', alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    variant={"outlined"}
                    sx={{margin: 2}}
                    size={"large"}
                >
                    Clear
                </Button>
                <Button
                    variant={"contained"}
                    sx={{margin: 2}}
                    onClick={handleDetect}
                    size={"large"}
                >
                    Detect
                </Button>
            </Stack>
        </>
    )
}