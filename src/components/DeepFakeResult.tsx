import {Stack, Typography, useTheme} from "@mui/material";
import {ResultType} from "../types/resultType.ts";
import OriginalLinkButton from "./widgets/OriginalLinkButton.tsx";
import {COMMENT, HEADER_FONT_20, HEADER_FONT_28, RESULT_STACK, RESULT_TITLE} from "../theme/styles.ts";
import prohibition from '../assets/prohibition.png';
import ResultPageImage from "./widgets/ResultPageImage.tsx";
import AccordionDescription from "./widgets/AccordionDescription.tsx";

export default function DeepFakeResult({video, audio, url}: ResultType) {
    const theme = useTheme();

    return (
        <div style={{}}>
            <div style={{position: 'relative', marginLeft: 100, marginBottom: 30}}>
                <ResultPageImage image={prohibition} alt={"Denied"}></ResultPageImage>
                <Stack
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    style={{position: 'relative', zIndex: 2}}
                >
                    <Typography
                        sx={HEADER_FONT_28}
                        style={{fontWeight: "bold"}}
                        color={theme.palette.error.main}
                    >
                        Deepfake Detected for
                    </Typography>
                    <OriginalLinkButton url={url} isDeepfake={true}></OriginalLinkButton>
                </Stack>
            </div>

            <Stack sx={RESULT_STACK}>
                <Typography sx={RESULT_TITLE}>
                    Possibility of being a Deepfake
                </Typography>
                <Stack direction={"column"} style={{margin: 20}}>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography sx={HEADER_FONT_20}>Video:</Typography>
                        {video.isMultiple
                            ?
                            <>
                                <Stack direction={"column"} style={{marginLeft: 30}} alignItems={"start"}>
                                    <Typography sx={HEADER_FONT_20}
                                                color={(video.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
                                        Left Person: {(video.fakeProbs[0] * 100).toFixed(1)}%
                                    </Typography>
                                    <Typography sx={HEADER_FONT_20}
                                                color={(video.fakeProbs[1] * 100 > 50) ? "error" : "primary"}>
                                        Right Person: {(video.fakeProbs[1] * 100).toFixed(1)}%
                                    </Typography>
                                </Stack>
                            </>
                            : <Typography sx={HEADER_FONT_20} style={{marginLeft: 30}}
                                          color={(video.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
                                {(video.fakeProbs[0] * 100).toFixed(1)}%
                            </Typography>
                        }
                    </Stack>

                    <Stack direction={"row"} style={{margin: 10}} alignItems={"center"}>
                        <Typography sx={HEADER_FONT_20}>Audio:</Typography>
                        {audio.isMultiple
                            ?
                            <>
                                <Stack direction={"column"} style={{marginLeft: 30}} alignItems={"start"}>
                                    <Typography sx={HEADER_FONT_20}
                                                color={(+audio.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
                                        First Speaker: {(+audio.fakeProbs[0] * 100).toFixed(1)}%
                                    </Typography>
                                    <Typography sx={HEADER_FONT_20}
                                                color={(+audio.fakeProbs[1] * 100 > 50) ? "error" : "primary"}>
                                        Second Speaker: {(+audio.fakeProbs[1] * 100).toFixed(1)}%
                                    </Typography>
                                </Stack>
                            </>
                            :
                            <Typography sx={HEADER_FONT_20} style={{marginLeft: 30}}
                                        color={(+audio.fakeProbs[0] * 100 > 50) ? "error" : "primary"}>
                                {(+audio.fakeProbs[0] * 100).toFixed(1)}%
                            </Typography>
                        }

                    </Stack>

                </Stack>
            </Stack>

            <Stack sx={RESULT_STACK}>
                <Typography sx={RESULT_TITLE}>
                    Audio to Text Output
                </Typography>
                <>
                    <Stack direction={"column"} style={{maxWidth: 500}}>
                        {+audio.fakeProbs[0] > 0.5 ?
                            <Typography sx={HEADER_FONT_20}
                                        style={{
                                            margin: 20,
                                            marginLeft: 30,
                                            textAlign: "start"
                                        }}>{audio.sttOutput[0]}</Typography> : <></>}
                        {+audio.fakeProbs[1] > 0.5 ?
                            <Typography sx={HEADER_FONT_20}
                                        style={{
                                            margin: 20,
                                            marginLeft: 30,
                                            textAlign: "start"
                                        }}>{audio.sttOutput[1]}</Typography> : <></>}
                    </Stack>
                </>
            </Stack>

            <Stack sx={RESULT_STACK}>
                <Typography sx={RESULT_TITLE}>
                    Deepfake Suspected Frames
                </Typography>
                <>
                    {!(video.isFake)
                        ? <Typography style={{margin: 20, marginLeft: 30,}} sx={HEADER_FONT_20}>
                            No frame seems Deepfake.
                        </Typography>
                        : <></>}
                    {video.fakeProbs[0] > 0.5 ? <img src={video.frames[0]} alt={"image not supported"} style={{
                        maxWidth: '200px',
                        maxHeight: '200px',
                        objectFit: 'contain',
                        marginLeft: 30,
                    }}/> : <></>}
                    {video.fakeProbs[1] > 0.5 ? <img src={video.frames[1]} alt={"image not supported"} style={{
                        maxWidth: '200px',
                        maxHeight: '200px',
                        objectFit: 'contain',
                        marginLeft: 30,
                    }}/> : <></>}
                </>
            </Stack>

            <Typography sx={COMMENT}>
                We think this video has deepfake generated content in it.<br/><br/>
                There are several contexts that deepfake content can be used with malicious intent.<br/><br/>
                If you think that this video is related to a certain topic, please click on the topic below.
            </Typography>

            <Stack direction={"column"} style={{paddingTop: 30, marginLeft: 100, maxWidth: 700}}>
                <AccordionDescription
                    id={"sexual-crimes"}
                    title={"Sexual Crimes"}
                    descriptions={
                        ["Sex Offenses: Production and dissemination of pornographic material that combines the faces of a particular person",
                            "Characteristic: To synthesize faces with pornography and produce and distribute them",
                            "Prevention: Minimize online disclosure of face photos, utilize deepfake detection tools.",
                            "If you suspect this deepfake content is related to sexual crimes, you can report it to the relevant authorities. Click here to be redirected to the official reporting page."]}
                    urls={["https://www.kocsc.or.kr/sec/rnc/iPinCert.do?conText=%2Fmain&joinType=24&explain=true"]}
                ></AccordionDescription>

                <AccordionDescription
                    id={"defamation"} // 명예훼손
                    title={"Defamation"}
                    descriptions={[
                        "Defamation: Forgery of character remarks and dissemination of false information",
                        "Characteristic: To manipulate speech or to distort facts",
                        "Prevention: Refrain from sharing before verifying information, verify sources, and report suspicious content",
                        "If you suspect this deepfake content is related to defamation, you can report it to the relevant authorities. Click here to be redirected to the official reporting page."]}
                    urls={["https://www.kocsc.or.kr/sec/rnc/iPinCert.do?conText=%2Fmain&joinType=24&explain=true"]}
                ></AccordionDescription>

                <AccordionDescription
                    id={"false-information"}
                    title={"Spreading False Information"}
                    descriptions={[
                        "Fake Information: Disclosure of Information as False Video",
                        "Characteristic: To disseminate information that is not true",
                        "Prevention: Check video sources and reliability, and do not share suspected content",
                        "If you believe this deepfake content is related to spreading false information, you can report it to the election commission. Click here to be redirected to the official reporting page."]}
                    urls={["https://www.kocsc.or.kr/mainPage.do#"]}
                ></AccordionDescription>

                <AccordionDescription
                    id={"election-law"}
                    title={"Election Law Violations"}
                    descriptions={[
                        "Violation of Election Law: Forgery of Politicians' Speech and Manipulation of Public Opinion",
                        "Characteristic: Influencing public opinion by manipulating a politician's remarks or actions",
                        "Prevention: Verification of remarks compared to official data, and request confirmation from the Election Commission for suspicious information related to the election",
                        "If you believe this deepfake content is related to election law violations, you can report it to the election commission. Click here to be redirected to the official reporting page."]}
                    urls={["https://www.kocsc.or.kr/mainPage.do#"]}
                ></AccordionDescription>

            </Stack>

        </div>
    )
}