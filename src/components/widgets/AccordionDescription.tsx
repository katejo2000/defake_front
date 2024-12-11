import {Accordion, AccordionDetails, AccordionSummary, Typography, useTheme} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionType = {
    id: string;
    title: string;
    descriptions: string[];
    urls: string[];
}

export default function AccordionDescription({id, title, descriptions, urls}: AccordionType) {
    const theme = useTheme();

    return (
        <Accordion sx={{marginTop: '5px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={id}
                id={id}
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    '& .MuiAccordionSummary-expandIconWrapper': {
                        color: 'white',
                    }
                }}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {descriptions.map((desc => {
                    return <Typography key={desc.substring(0, 10)} style={{margin: 10}}>
                        {desc}
                    </Typography>
                }))}
                {urls.map((url) => {
                    return <Typography
                        key={url.substring(0, 10)}
                        component="a"
                        href={url}
                        target="_blank"
                        sx={{
                            display: 'block',
                            marginTop: 2,
                            color: theme.palette.primary.main,
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }}
                    >
                        Go to reporting page →
                    </Typography>
                })}
            </AccordionDetails>
        </Accordion>
    );
}