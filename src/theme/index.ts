import {createTheme} from '@mui/material/styles';

// Import the font files
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Ubuntu',
            'Montserrat',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 600,
        },
        body1: {
            fontFamily: 'Ubuntu',
        },
        button: {
            fontFamily: 'Ubuntu',
            fontWeight: 500,
        },
    },
    palette: {
        primary: {
            main: '#1A5319',
        },
        secondary: {
            main: '#508D4E',
        },
        error: {
            main: '#FF2929',
        }
    },
});

export default theme; 