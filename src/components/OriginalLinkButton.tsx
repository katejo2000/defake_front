import {Button} from "@mui/material";

type OriginalLink = {
    url: string;
}

export default function OriginalLinkButton({ url }: OriginalLink) {
    const handleClick = () => {
        const fullUrl = url.startsWith('http') ? url : `https://${url}`;
        window.open(fullUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <Button
            variant="outlined"
            style={{marginLeft: 20}}
            onClick={handleClick}
        >
            Original Link
        </Button>
    )
}