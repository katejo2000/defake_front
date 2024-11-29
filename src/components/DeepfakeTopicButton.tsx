import {Button} from "@mui/material";
import {MouseEventHandler} from "react";

type TopicButton = {
    title: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
}
export default function DeepfakeTopicButton({title, onClick}: TopicButton) {
    return (
        <Button variant={"outlined"} style={{width: 300, marginTop: 20}} onClick={onClick}>
            {title}
        </Button>
    );
}