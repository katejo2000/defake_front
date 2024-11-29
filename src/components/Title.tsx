import {Typography} from "@mui/material";

type TitleText = {
    text: string;
}

export default function Title({text}: TitleText) {
    return (
        <Typography
            variant="h1"
            color="primary"
            sx={{margin: '32px'}}
            fontSize={68}
            fontWeight={"bold"}
        >
            {text}
        </Typography>
    )
}