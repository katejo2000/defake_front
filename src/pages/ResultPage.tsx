import {useLocation, useNavigate} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";
import NoDeepFakeResult from "../components/NoDeepFakeResult.tsx";
import DeepFakeResult from "../components/DeepFakeResult.tsx";

export default function ResultPage() {

    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state?.data;

    const handleMainPage = () => {
        navigate('/');
    }

    const handleGetCertificate = () => {
        navigate('/');
    }

    return (
        <>
            <Typography variant={"h2"} style={{margin: 20}}>Result</Typography>

            {/*<NoDeepFakeResult></NoDeepFakeResult>*/}
            <DeepFakeResult></DeepFakeResult>

            <Stack direction={"row"} sx={{marginTop: '20px', alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    variant={"outlined"}
                    sx={{margin: 2}}
                    onClick={handleMainPage}
                >
                    Main Page
                </Button>
                <Button
                    variant={"contained"}
                    sx={{margin: 2}}
                    onClick={handleGetCertificate}
                >
                    Get Certificate
                </Button>
            </Stack>
        </>
    );
}