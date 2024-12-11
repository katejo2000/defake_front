import {Button} from "@mui/material";
import {MouseEventHandler} from "react";

type ButtonFunction = {
    func: MouseEventHandler<HTMLButtonElement>,
    title: string,
    contained?: boolean,
    disabled?: boolean,
}
export default function LargeButton({func, title, contained, disabled}: ButtonFunction) {
    return (
        <Button
            variant={(contained == true) ? "contained" : "outlined"}
            sx={{margin: 2}}
            onClick={func}
            size={"large"}
            disabled={disabled}
        >
            {title}
        </Button>
    );
}