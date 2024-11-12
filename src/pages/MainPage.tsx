import {useNavigate} from 'react-router-dom';
import {Button, FormControl, Input, MenuItem, Select, Stack, Typography} from "@mui/material";
import {GetAudioResult, GetVideoResult} from "../utils/gradio.ts";


export default function MainPage() {
    const navigate = useNavigate();

    const handleDetect = () => {
        navigate('/loading');

        Promise.all([
            GetAudioResult(),
            GetVideoResult()
        ]).then(([audioResult, videoResult]) => {
            navigate('/result', {
                state: {
                    audioData: audioResult,
                    videoData: videoResult
                }
            });
        }).catch(error => {
            console.error('Error getting results:', error);
            navigate('/error')
        });
    }

    return (
        <>
            <h1 style={{margin: 60}}>DeFake</h1>
            <Typography style={{margin: 40, fontSize: 20}}>Upload a video and select a model to check for Deepfake
                results.</Typography>
            <FormControl sx={{display: "block"}}>
                <Stack direction={"row"} style={{padding: 10, justifyContent: "center"}}>
                    <Typography style={{padding: 10, width: 50}}>URL</Typography>
                    <Input style={{
                        backgroundColor: '#ffffff', borderColor: '#eeeeee', width: '240px', height: '40px',
                        borderWidth: '1px', borderRadius: '10px', paddingLeft: '10px'
                    }}></Input>
                </Stack>
            </FormControl>
            <FormControl sx={{display: "block"}}>
                <Stack direction={"row"} style={{padding: 10, justifyContent: "center"}}>
                    <Typography style={{padding: 10, width: 50}}>Model</Typography>
                    <Select label="Model" defaultValue={1} style={{width: 240, height: 40}}>
                        <MenuItem value={1}>EfficientNet-B4</MenuItem>
                        <MenuItem value={2}>EfficientNet-B4ST</MenuItem>
                        <MenuItem value={3}>EfficientNetAutoAttB4</MenuItem>
                        <MenuItem value={4}>EfficientNetAutoAttB4ST</MenuItem>
                        <MenuItem value={5}>Xception</MenuItem>
                    </Select>
                </Stack>
            </FormControl>

            <Stack direction={"row"} sx={{marginTop: '20px', alignItems: 'center', justifyContent: 'center'}}>
                <Button variant={"outlined"} sx={{margin: 2}}>Clear</Button>
                <Button
                    variant={"contained"}
                    sx={{margin: 2}}
                    onClick={handleDetect}
                >
                    Detect
                </Button>
            </Stack>
        </>
    )
}