import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import greenBg from '../assets/green_bg.jpg';
import NavBar from '../components/widgets/NavBar.tsx';

export default function LandingPage() {
    const navigate = useNavigate();

    const handleTryDefake = () => {
        navigate('/main');
    };

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${greenBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: 0,
                padding: 0,
                position: 'relative'
            }}
        >
            <NavBar/>

            <Typography
                variant="h1"
                color="#f3f3f3"
                sx={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '40px',
                    maxWidth: '800px'
                }}
            >
                We care about spreading only the truth.
            </Typography>

            <Button
                variant="contained"
                size="large"
                onClick={handleTryDefake}
                style={{backgroundColor: '#001e06',}}
                sx={{
                    fontSize: '20px',
                    padding: '12px 40px',
                }}
            >
                Try Defake
            </Button>
        </Box>
    );
} 