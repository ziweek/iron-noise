"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

//
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

import { useTheme } from "next-themes";
import { useIsMobile } from "@/hook/useMediaQuery";
import HorizontalSlider from "@/component/horizontal-slider";
import {
  IconBadge,
  IconLogo,
  IconPerson,
  IconChart,
  IconLock,
} from "@/component/common/icons";
import { LottieArrowDown, LottieDotCircle } from "@/component/common/lotties";
import Footer from "@/component/footer";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [isThreeModelVisible, setIsThreeModelVisible] =
    useState<boolean>(false);
  const [indexOfPressedCard, setIndexOfPressedCard] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    checkResize();
  }, [isMobile]);

  useEffect(() => {
    toast.success("아래로 스크롤하기", {
      className: "font-bold text-sm",
      duration: 5000,
    });
    AOS.init();
    return () => {};
  }, []);

  return (
    <>
      <section className="mx-auto h-full min-h-full w-screen select-none overflow-x-clip bg-white dark:bg-black">
        {/* 1. 프로젝트 소개  */}
        <div className="mx-auto flex h-screen flex-col items-center justify-center bg-cover bg-center bg-[url('../../public/image/background-pattern.jpg')] bg-blend-darken bg-black/30">
          <div className="z-20 flex w-full flex-col items-center justify-center space-y-8">
            {/* 소개 텍스트 */}
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconLogo width={mobile ? 150 : 200} fill="#fff"></IconLogo>
              <p
                className={`text-center font-bold text-white ${
                  mobile ? "text-md" : "text-md"
                }`}
              >
                인공지능 도청을 교란하는,{mobile && <br></br>}딥러닝 기반 실시간
                음성 위장 체계
              </p>
            </div>
            {/*  */}
            <div className="flex w-full flex-col items-center justify-center space-y-4">
              <div
                className={`${
                  mobile ? "h-[150px]" : "h-[200px]"
                } flex  flex-col justify-center overflow-y-clip`}
              >
                <LottieDotCircle
                  play
                  loop
                  width={mobile ? "200px" : "300px"}
                ></LottieDotCircle>
              </div>
              <div className="flex flex-row space-x-2">
                <Button
                  className={`font-bold text-white hover:-translate-y-1 ${
                    mobile ? "border-2" : "border-3"
                  }`}
                  size={mobile ? "md" : "lg"}
                  color={"default"}
                  variant={"bordered"}
                  aria-label="information"
                  onClick={() => {
                    window.open(
                      "https://www.canva.com/design/DAGGtLZZIik/pXgzqOEimHFKjbO9cdE3kg/edit?utm_content=DAGGtLZZIik&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    );
                  }}
                >
                  프로젝트 소개자료
                </Button>
                <Button
                  className={`font-bold text-white hover:-translate-y-1 ${
                    mobile ? "border-2" : "border-3"
                  }`}
                  size={mobile ? "md" : "lg"}
                  color={"default"}
                  variant={"bordered"}
                  aria-label="product"
                  onClick={() => {
                    router.push("/main");
                  }}
                >
                  프로젝트 체험하기
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4">
            <LottieArrowDown play loop width={80}></LottieArrowDown>
          </div>
          {/* <div className="absolute z-10 h-screen w-auto min-w-full max-w-none bg-black/75"></div> */}
          {/* <video
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute z-0 h-screen w-screen max-w-none overflow-clip object-cover"
        >
          <source
            src={require("../../public/video/bg.mp4")}
            type="video/mp4"
            className="h-screen w-screen"
          />
          Your browser does not support the video tag.
        </video> */}
        </div>
        {/* 2. 사명 */}
        <div className="flex h-[400px] flex-col items-center justify-center gap-8 pt-36">
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            className={`${mobile ? "" : "text-lg"} select-none text-center`}
          >
            저희 팀은 대한민국 국군의 일원으로<br></br>창조적인 아이디어와
            혁신적인 기술역량으로<br></br>우리 국방의 미래를 함께 고민합니다.
          </p>
        </div>
        {/* 4. 목적 */}
        <div className="mx-auto flex h-fit max-w-[800px] flex-col items-center justify-center gap-8 pt-36">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <IconLock width={20}></IconLock>
              <p className="text-tiny">개발 배경</p>
            </div>
            <p
              className={`${
                mobile ? "text-2xl" : "text-3xl"
              } select-none text-center font-bold leading-snug`}
            >
              격동하는 세계 속에서,<br></br>더욱 강조되는 정보 보안
            </p>
            <p className="select-none text-center">
              아이언노이즈는 전세계적 정보전과 더불어<br></br>오늘날 시대적
              상황의 속에서 영감을 얻었습니다.
            </p>
            <p className="select-none text-center text-sm">
              * 아래 카드를 하나씩 탭하여 자세히 살펴보기
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex w-full flex-col gap-4 px-8"
            style={
              mobile
                ? { gap: "20px" }
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr",
                    gap: "20px",
                  }
            }
          >
            {[
              {
                keyword: "도청 기술의 AI 고도화",
                title:
                  "최근 인공지능 기반의 음성인식 기술(ASR: Automatic  Speech Recognition)이 발전하며 도청 기술 또한 고도화되고 있음.",
                tappedTitle:
                  "적대적 공격과 예측적 공격을 결합한 딥러닝 기반 실시간 음성 위장 체계를 통해 AI 음성인식 모델을 교란하여 도청 시도 차단",
                bgImg: "/image/background-pattern.jpg",
              },
              {
                keyword: "스마트 장비의 보급 확대",
                title:
                  "스마트 장비(스마트폰 등)의 보급으로 인해 음성 정보 유출 위험에 더 쉽게 노출되고 있으며, 해킹과 결합되어 정보 도청 시도가 증가하고 있음",
                tappedTitle:
                  "실시간 음성위장 딥러닝 모델은 기존 군사장비의 네트워크 암호화 기술과 결합 보안성을 한층 강화할 수 있는 체계를 구축",
                bgImg: "/image/background-pattern.jpg",
              },
            ].map((content, i) => {
              return (
                <Card
                  key={i}
                  data-aos={"fade-up"}
                  data-aos-duration="1000"
                  data-aos-id={`super-duper`}
                  data-aos-delay={mobile ? 0 : i * 500}
                  isPressable
                  onPressStart={(e) => {
                    setIndexOfPressedCard(i);
                  }}
                  onPressEnd={() => {
                    setIndexOfPressedCard(undefined);
                  }}
                  className={`${
                    mobile ? "h-[300px]" : "h-[300px]"
                  } w-full bg-cover bg-center bg-blend-darken`}
                  shadow={"sm"}
                  onPress={() => {
                    console.log(11);
                  }}
                  style={{
                    backgroundColor:
                      i == indexOfPressedCard ? "#00000099" : "#00000025",
                    backgroundImage:
                      i == indexOfPressedCard
                        ? `url('${content.bgImg}`
                        : `url('${content.bgImg}')`,
                  }}
                >
                  <CardBody
                    className={`text-balance ${"items-center"} flex w-full flex-col justify-center gap-4 break-keep leading-snug`}
                  >
                    {i == indexOfPressedCard ? (
                      <div className="flex h-full w-full p-4 flex-col justify-between">
                        <div className="flex flex-col items-start gap-1">
                          <p
                            className={`w-fit whitespace-pre-line break-keep bg-teal-600 px-2 font-bold leading-relaxed text-white`}
                          >
                            아이디어 개발 배경 {i + 1}
                          </p>
                          <p
                            className={`text-sm font-bold leading-relaxed text-white`}
                          >
                            {content.title}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <p
                            className={`w-fit whitespace-pre-line break-keep px-2 font-bold leading-relaxed text-white ${
                              i == indexOfPressedCard
                                ? "bg-teal-800"
                                : "bg-teal-600"
                            }`}
                          >
                            아이디어 기대 효과 {i + 1}
                          </p>
                          <p
                            className={`text-sm font-bold leading-relaxed text-white ${
                              i == indexOfPressedCard ? "text-right" : ""
                            }`}
                          >
                            {content.tappedTitle}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="bg-black/75 px-2 py-1 text-xl font-bold text-white text-center">
                        {content.keyword}
                      </p>
                    )}
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
        {/* 5. 핵심 기능 */}
        {/* <div className="mx-auto flex h-fit max-w-[800px] flex-col items-center justify-center gap-8 pt-36">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <IconBadge width={25} strokeFill="#000"></IconBadge>
              <p className="text-tiny">핵심 기능</p>
            </div>
            <p className="select-none text-center text-3xl font-bold leading-snug">
              인공지능으로 완성한,<br></br>MiliPat이 전달하는 가치
            </p>
            <p className="select-none text-center">
              아래 카드를 하나씩 탭하여 자세히 살펴보기
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex w-full flex-col gap-4 px-8"
            style={
              mobile
                ? { gap: "20px" }
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr",
                    gap: "20px",
                  }
            }
          >
            {[
              {
                title: "방산 특허 검색 기능",
                tappedTitle:
                  "국내 방산 특허 뿐만 아니라 미국, 일본 등의 해외 방산 특허의 메타데이터를 검색하고 그 원문을 조회하는 기능을 제공합니다.",
                bgImg: "/images/index/bg-home.jpeg",
              },
              {
                title: "AI 요약 책갈피 기능",
                tappedTitle:
                  "RAG 기법의 LLM 모델이 특허 텍스트 데이터를 분석하여, 핵심적인 문장을 추출하고 하이라이트하여 사용자 편의성을 향상시킵니다.",
                bgImg: "/images/index/bg-pdf.jpeg",
              },
            ].map((content, i) => {
              return (
                <Card
                  key={i}
                  data-aos={"fade-up"}
                  data-aos-duration="1000"
                  data-aos-id={`super-duper`}
                  data-aos-delay={mobile ? 0 : i * 500}
                  isPressable
                  onPressStart={(e) => {
                    setIndexOfPressedCard(i);
                  }}
                  onPressEnd={() => {
                    setIndexOfPressedCard(undefined);
                  }}
                  className={`${
                    mobile ? "h-[300px]" : "h-[300px]"
                  } w-full border-1 bg-cover bg-center bg-blend-darken shadow-black`}
                  shadow={"lg"}
                  onPress={() => {
                    console.log(11);
                  }}
                  style={{
                    backgroundImage:
                      i == indexOfPressedCard
                        ? `url('${content.bgImg}`
                        : `url('${content.bgImg}')`,
                  }}
                >
                  <CardHeader
                    className={`text-balance flex flex-row items-start ${
                      i == indexOfPressedCard ? "text-right" : "text-left"
                    } gap-2 break-keep bg-black/50 leading-snug`}
                  >
                    <p
                      className={`w-fit whitespace-pre-line break-keep px-2 font-bold leading-relaxed text-white ${"bg-red-600"}`}
                    >
                      {`핵심기능 ${i + 1}`}
                    </p>
                    <p
                      className={`font-bold leading-relaxed text-white ${
                        i == indexOfPressedCard ? "text-right" : ""
                      }`}
                    >
                      {content.title}
                    </p>
                  </CardHeader>
                  <CardBody
                    className={`text-balance flex flex-col justify-end gap-1 break-keep p-4 leading-snug bg-blend-darken`}
                    style={{
                      backgroundColor:
                        i == indexOfPressedCard ? "#00000099" : "#00000025",
                    }}
                  >
                    <p className={`text-right leading-relaxed text-white`}>
                      {i == indexOfPressedCard ? content.tappedTitle : ""}
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div> */}
        {/* 1. 차별화 포인트 - 놀라운 성능 */}
        {/* <div className="mx-auto flex h-fit max-w-[800px] flex-col items-center justify-center gap-8 pt-36">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <IconChart width={"30"}></IconChart>
              <p className="text-tiny">차별화 포인트 1</p>
            </div>
            <p className="select-none text-3xl font-bold leading-snug">
              최고의 분석력을 위한<br></br> MiliPat의 놀라운 성능
            </p>
            <p className="select-none text-center">
              다채로운 기술역량을 도입한 MiliPat은<br></br>그 뛰어난
              성능에서부터 시작합니다.
            </p>
          </div>
          <div
            className={`mx-auto w-full flex-col px-4 ${
              mobile ? "flex gap-4" : "grid grid-cols-2 gap-4"
            }`}
          >
            {[
              {
                title:
                  "LLM-Blender Ensenble 구조로\n단일 모델을 능가하는 성능 지표",
                img: (
                  <div className="flex h-full min-h-[300px] w-full">
                    <Bar
                      data={{
                        labels: ["문서 요약", "전체 평가"],
                        datasets: [
                          {
                            label: "ChatGPT",
                            data: [33.3, 42.7],
                            backgroundColor: "#74AA9C80",
                          },
                          {
                            label: "MiliPat LLM",
                            data: [56.94, 59.05],
                            backgroundColor: "#1D4A8380",
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        animation: {
                          // delay: 1000,
                          duration: 1000,
                        },
                        plugins: {
                          legend: {
                            position: "top" as const,
                          },
                        },
                      }}
                      // width={"full"}
                      // height={"full"}
                    ></Bar>
                  </div>
                ),
              },
              {
                title:
                  "어떠한 환경에서도 실시간으로\n랜더링하는 3D 구조도 모델링",
                img: (
                  <div className="flex h-[300px] w-full flex-col items-center justify-center overflow-clip rounded-xl bg-primary-50">
                    {isThreeModelVisible ? (
                      <></>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-4">
                        <Button
                          color={"primary"}
                          variant={"shadow"}
                          onPress={() => {
                            setIsThreeModelVisible(!isThreeModelVisible);
                          }}
                        >
                          3D 모델링 보기
                        </Button>
                        <p className="text-sm text-primary">
                          수초 이내의 로딩 시간이 소요될 수 있습니다.
                        </p>
                      </div>
                    )}
                  </div>
                ),
              },
            ].map((content, i) => {
              return (
                <Card
                  key={i}
                  data-aos={"fade-up"}
                  data-aos-duration="1000"
                  data-aos-id={`super-duper`}
                  data-aos-delay={mobile ? 0 : i * 500}
                  className="h-full w-full py-4"
                  shadow={"none"}
                >
                  <CardHeader>
                    <p className="mx-auto whitespace-pre-line text-center text-xl font-bold leading-relaxed text-primary">
                      {content.title}
                    </p>
                  </CardHeader>
                  <CardBody className="text-balance flex w-full flex-col items-center justify-center gap-4 break-keep">
                    {content.img}
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div> */}
        {/* 2. 차별화 포인트 - 강력한 보안 */}
        <div className="mx-auto flex h-fit max-w-[800px] flex-col items-center justify-center gap-8 pt-36">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <IconBadge width={25} strokeFill="#000"></IconBadge>
              <p className="text-tiny">핵심 기능</p>
            </div>
            <p
              className={`${
                mobile ? "text-2xl" : "text-3xl"
              } select-none text-center font-bold leading-snug`}
            >
              딥러닝 인공지능으로 완성한,<br></br>아이언노이즈가 전달하는 가치
            </p>
            <p className="select-none text-center">
              아이언노이즈는 미국 컬럼비아 대학 연구진이 발표한 논문 <br></br>
              (Real-Time Neural Voice Camouflage 2022)에 근거하고 있습니다.
            </p>
          </div>
          <div
            className={`mx-auto w-full flex-col px-4 ${
              mobile ? "flex gap-4" : "grid grid-cols-2 gap-4"
            }`}
          >
            {[
              {
                title: "적대적 공격: 음성 인식 모델 교란",
                img: (
                  <Image
                    src={"/images/index/devtool_detection.png"}
                    width={300}
                    height={200}
                    alt="img"
                    className="mx-auto w-full"
                  ></Image>
                ),
                text: "아이언노이즈는 CNN 딥러닝 구조를 기반으로 음성 식별 모델(ASR)을 교란하는 노이즈를 생성하며, 도청 AI의 음성인식 시스템이 정확하지 않은 텍스트 결과를 생성하도록 유도하고 있습니다.",
              },
              {
                title: "예측적 공격: 실시간 음성 분석 및 위장",
                img: (
                  <Image
                    src={"/images/index/defensive_agent.png"}
                    width={300}
                    height={200}
                    alt="img"
                    className="mx-auto w-full"
                  ></Image>
                ),
                text: "아이언노이즈는 음성발화의 패턴과 특성을 고려하여 δ초 동안의 분석 시간을 거친 후, 예측적 노이즈를 생성해 실시간 통신 중에도 효과적인 음성 보호와 위장 효과를 제공할 수 있습니다.",
              },
            ].map((content, i) => {
              return (
                <Card
                  key={i}
                  data-aos="fade-left"
                  data-aos-delay={mobile ? 0 : i * 500}
                  data-aos-duration="1000"
                  className="h-full w-full bg-black p-4"
                  // style={{ gridArea: content.gridArea }}
                  shadow={"sm"}
                >
                  <CardHeader>
                    <p className="tprimary whitespace-pre-line break-keep text-xl font-bold leading-relaxed text-white">
                      {content.title}
                    </p>
                  </CardHeader>
                  {/* <Divider></Divider> */}
                  <CardBody className="text-balance space-y-4 break-keep">
                    <p className="text-sm leading-relaxed text-white">
                      {content.text}
                    </p>
                    {content.img}
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
        {/* 추가 기술 설명  */}
        <div className="mx-auto flex h-fit flex-col items-center justify-center gap-8 pt-36 max-w-[800px]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <p className="select-none text-center text-3xl font-bold leading-snug">
              아이언노이즈에 숨겨진<br></br>또다른 놀라운 기술들
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex h-fit w-full flex-col gap-4"
          >
            <HorizontalSlider
              isPressable={false}
              textColor={"#000000"}
              width={300}
              height={200}
              backgroundColor="#fefefe"
              content={[
                {
                  title: "Docker Compose를 활용한 컨테이너 간의 오케스트레이션",
                  text: "Docker Compose를 활용하여 여러 컨테이너 간의 오케스트레이션을 구현하였으며, blender 등의 소프트웨어로 작성된 3D 모델링 구조도를 통해 운용 장비의 파트에 직관적으로 접근할 수 있게 했습니다.",
                },
                // {
                //   title: "Ollama 프레임워크를 활용한 LLM 서버 구축",
                //   text: "보안 문제를 해결하기 위해 Ollama 프레임워크를 활용하여 독립적인 서버를 구축했습니다. 이를 통해 Mistral 등의 다양한 LLM 모델을 효과적으로 운용할 수 있습니다.",
                // },
                // {
                //   title: "Qdrant를 활용한 Vector 데이터베이스 구축",
                //   text: "LLM 특유의 '할루시네이션'(환각) 현상을 최소화하고, 경제적인 측면에서 최대한 효율적인 성능을 확보하기 위해 다수의 에이전트 모델 간의 상호작용을 시키는 앙상블 기법을 활용했습니다.",
                // },
                {
                  title: "React-Query를 활용한 서버 동기화 및 전역상태 관리",
                  text: "React-Query를 활용하여 서버 동기화와 전역상태 관리를 구현했으며, 이를 통해 사용자 편의성을 높였습니다.",
                },
                {
                  title: "Sound-Visualizer를 활용한 사운드 데이터 시각화",
                  text: "Sound-Visualizer를 활용하여 사운드 데이터를 시각화했으며, 이를 통해 사용자 직관성을 높였습니다.",
                },
                // {
                //   title: "Three.js를 활용한 실시간 3D 렌더링 기법",
                //   text: "Three.js를 활용하여 실시간 3D 렌더링을 구현하였으며, 이를 통해 사용자 경험을 개선했습니다.",
                // },
                // {
                //   title: "React-pdf를 활용한 웹환경 실시간 PDF 랜더링",
                //   text: "Docker Compose를 활용하여 여러 컨테이너 간의 오케스트레이션을 구현하였으며, blender 등의 소프트웨어로 작성된 3D 모델링 구조도를 통해 운용 장비의 파트에 직관적으로 접근할 수 있게 했습니다.",
                // },
              ]}
            ></HorizontalSlider>
          </div>
        </div>
        {/* Footer */}
        <div className="mx-auto max-w-[600px] px-8 py-12 pt-12">
          <Accordion variant={"shadow"} className="bg-black/20" isDisabled>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="데이터 출처 확인하기"
              classNames={{ title: "text-sm" }}
            >
              aa
            </AccordionItem>
          </Accordion>
        </div>
        <Footer
          isFixed
          title={"아이언노이즈"}
          subtitle={"제1회 국방 AI 아이디어톤"}
        ></Footer>
      </section>
      <Toaster></Toaster>
    </>
  );
}
