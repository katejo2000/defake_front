import {Button} from "@mui/material";

type OriginalLink = {
    url: string;
    isDeepfake: boolean;
}

export default function OriginalLinkButton({url, isDeepfake}: OriginalLink) {
    const handleClick = () => {
        const fullUrl = url.startsWith('http') ? url : `https://${url}`;
        window.open(fullUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <Button
            variant="outlined"
            style={{marginLeft: 20}}
            color={isDeepfake ? "error" : "primary"}
            onClick={handleClick}
        >
            Original Link
        </Button>
    )
}