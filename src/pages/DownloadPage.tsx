import {useLocation, useNavigate} from "react-router-dom";
import {Button, Card, CardContent, Stack, Typography} from "@mui/material";
import Title from "../components/widgets/Title.tsx";
import LargeButton from "../components/widgets/LargeButton.tsx";

export default function DownloadPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const {reportData, isLoading} = location.state as { reportData?: any, isLoading: boolean };

    const handleDownload = async () => {
        try {
            const response = await fetch(reportData.data[0].url);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'report.docx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const handleMainPage = () => {
        navigate('/');
    };

    // "
    //         신고제목: 딥페이크 영상 관련 신고
    //
    //         신고내용:
    //         이 영상은 정치적 인물이 법과 질서를 회복하겠다는 내용을 담고 있으며, 해당 인물은 공적 인물로서 시민들에 대한 신뢰와 영향력이 큽니다. 두 번째 이미지에서 나타나는 딥페이크 확률 0.6000089645385742는 0.5를 초과하므로 이 영상이 조작되었음을 나타냅니다. 이는 허위정보의 유포를 통한 정치적 조작의 가능성을 내포하고 있습니다.
    //
    //         음성 딥페이크 확률 또한 0.8371657133102417로, 역시 허위조작된 내용을 담고 있음을 증명합니다. 첫 번째 음성이 "here's my plan to restore Law and Order in our cities and throughout our country frankly first because'"로 시작하여 실제 영상의 내용과 상이할 수 있음을 시사합니다.
    //
    //         이와 같은 딥페이크 영상은 정치 및 선거 개입의 가능성을 띄며, 유권자의 판단을 흐리게 하여 공정한 선거 환경을 해칠 수 있습니다. 또한, 법적 제재를 받을 수 있는 명예 훼손 및 허위 정보 유포의 결과를 초래할 위험이 있습니다.
    //
    //         증거자료:
    //         두 번째 이미지는 조작된 영상의 한 부분으로, 현재 상황과 다르게 재구성된 정보를 담고 있어, 정치적 의도를 가진 허위 정보가 확산됨에 따라 심각한 사회적 문제를 일으킬 수 있습니다.
    //
    //         딥페이크 영상이 지속적으로 사용될 경우, 시민의 신뢰를 감소시키고, 불법 정보 유포로 인해 사회적 혼란이 발생할 우려가 큽니다. 이는 민주적 절차를 훼손하고, 공공의 안전과 질서를 해치는 결과로 이어질 수 있습니다."
    return (
        <>
            <Title text={"Download Report"}></Title>
            <Card sx={{maxWidth: 900, margin: 'auto', marginTop: 4}}>
                <CardContent>
                    <Typography sx={{fontSize: 26, margin: 2}}>
                        Report Summary
                    </Typography>
                    {isLoading
                        ? <Typography sx={{fontSize: 20}}>Wait a minute... Your report is being made.</Typography>
                        : reportData.data[1].split("\n\n").map((sentence: string, index: number) => (
                            <Typography key={index} sx={{fontSize: 20, textAlign: "start"}}>
                                {sentence}<br></br><br></br>
                            </Typography>
                        ))
                    }
                </CardContent>
            </Card>

            {isLoading ?
                <></>
                : <>
                    <Typography sx={{fontSize: 24, margin: 4}}>
                        You can Download the total Report by pressing on the button below.
                    </Typography>
                    <Typography sx={{fontSize: 24, margin: 2}}>
                        Copy and paste related information to the reporting site that you want,
                        or you can use the site below.
                    </Typography>
                    <Button
                        href="https://www.kocsc.or.kr/mainPage.do"
                        target="_blank"
                        sx={{
                            textTransform: 'none',
                            fontSize: 26,
                            margin: 2
                        }}
                    >
                        방송통신심의위원회
                    </Button>
                </>
            }

            <>
                <Stack direction={"row"}
                       sx={{marginTop: '50px', marginBottom: '50px', alignItems: 'center', justifyContent: 'center'}}>
                    <LargeButton func={handleMainPage} title={"Main Page"}></LargeButton>
                    <LargeButton
                        func={handleDownload}
                        title={"Download Report"}
                        contained={true}
                        disabled={isLoading}
                    ></LargeButton>
                </Stack>
            </>
        </>
    );
} 