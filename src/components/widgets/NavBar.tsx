import {AppBar, Stack, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

type NavBarProps = {
    transparent?: boolean;
}

export default function NavBar({transparent = false}: NavBarProps) {
    const navigate = useNavigate();

    const navItems = [
        {title: 'DeFake', path: '/'},
        {title: 'About Us', path: '/about'},
        {title: 'Our Product', path: '/product'}
    ];

    return (
        <AppBar 
            position="fixed" 
            elevation={0}
            sx={{
                backgroundColor: transparent ? 'transparent' : '#001e06'
            }}
        >
            <Toolbar>
                <Stack direction="row" spacing={4} alignItems="center">
                    {navItems.map((item) => (
                        <Typography
                            key={item.title}
                            variant="body1"
                            sx={{
                                cursor: 'pointer',
                                color: '#f3f3f3',
                                '&:hover': {
                                    color: '#ffffff',
                                },
                                fontSize: (item.title == "DeFake") ? '28px' : '16px',
                            }}
                            onClick={() => navigate(item.path)}
                        >
                            {item.title}
                        </Typography>
                    ))}
                </Stack>
            </Toolbar>
        </AppBar>
    );
} 