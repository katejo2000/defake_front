import {Button} from "@mui/material";
import {MouseEventHandler} from "react";

type ButtonFunction = {
    func: MouseEventHandler<HTMLButtonElement>,
    title: string,
    contained?: boolean,
}
export default function LargeButton({func, title, contained}: ButtonFunction) {
    return (
        <Button
            variant={(contained == true) ? "contained" : "outlined"}
            sx={{margin: 2}}
            onClick={func}
            size={"large"}
        >
            {title}
        </Button>
    );
}