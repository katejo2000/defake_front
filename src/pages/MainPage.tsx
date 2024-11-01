import {Button, FormControl, Input, MenuItem, Select, Stack, Typography} from "@mui/material";

export default function MainPage() {

    return (
        <>
            <h1>DeFake</h1>
            <p>Upload a video and select a model to check for Deepfake results.</p>
            <FormControl>
                <Stack direction={"row"} style={{padding: 10}}>
                    <Typography style={{padding: 10}}>URL</Typography>
                    <Input style={{
                        backgroundColor: '#ffffff', borderColor: '#eeeeee', width: '240px', height: '40px',
                        borderWidth: '1px', borderRadius: '10px', paddingLeft: '10px'
                    }}></Input>
                </Stack>
                <Stack direction={"row"} style={{padding: 10}}>
                    <Typography style={{padding: 10}}>Model</Typography>
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
                <Button variant={"contained"} sx={{margin: 2}}>Detect</Button>
            </Stack>
        </>
    )
}