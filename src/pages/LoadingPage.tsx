import {CircularProgress, Box, Typography} from '@mui/material';

export default function LoadingPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}
        >
            <Typography variant="h1" color={"primary"} fontSize={68} sx={{mt: 2}}>
                Detecting...
            </Typography>
            <CircularProgress size={60} style={{padding: 100}}/>
            <Typography variant="h6" sx={{mt: 2}}>
                Checking for deep fake frames...
            </Typography>
        </Box>
    );
}