import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";

export default function ErrorPage() {

    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate('/');
    }

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
            <h1 style={{margin: 60}}>Oops...</h1>
            <Typography style={{margin: 40, fontSize: 20}}>
                Something wrong occurred. Please try again.
            </Typography>

            <Button
                variant={"outlined"}
                sx={{margin: 2}}
                onClick={handleMainPage}
            >
                Main Page
            </Button>

        </Box>
    );
}