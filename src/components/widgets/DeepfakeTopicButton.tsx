import {Button} from "@mui/material";
import {MouseEventHandler} from "react";

type TopicButton = {
    title: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
}
export default function DeepfakeTopicButton({title, onClick}: TopicButton) {
    return (
        <Button variant={"outlined"} style={{width: 300, margin: 10, height: 50, fontSize: 18}} onClick={onClick}>
            {title}
        </Button>
    );
}