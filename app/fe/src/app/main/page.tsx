"use client";

import { LottieSecurityCheck } from "@/component/common/lotties";
import Header from "@/component/header";
import { useIsMobile } from "@/hook/useMediaQuery";
import {
  Tabs,
  Tab,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
} from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { AudioVisualizer } from "ts-audio-visualizer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  IconEmail,
  IconKeyword,
  IconLog,
  IconManual,
} from "@/component/common/icons";
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  PointElement,
  LineElement,
  Filler
);

export default function Home() {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>("부가 기능");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonOption, setButtonOption] = useState<any>({
    isModelActivated: false,
    buttonContentIndex: 0,
    buttonContent: [
      {
        text: "음성 보안 이해",
        icon: <IconManual width={35} fill="#000"></IconManual>,
        desription: (
          <div className="space-y-4 leading-loose">
            <h1 className="font-bold">
              ASR(Auto Speech Recognition) 음성 인식과 도청으로의 활용가능성
            </h1>
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
              데이터를 컴퓨터가 이해할 수 있는 텍스트로 변환합니다. ASR 시스템은
              딥러닝 알고리즘을 활용해 음향 신호를 분석하고, 이를 텍스트로
              변환하는 과정에서 언어 모델과 발음 사전을 사용합니다. 이러한
              기술은 스마트폰의 음성 비서, 자막 생성, 고객 서비스 자동화 등
              다양한 분야에서 널리 사용되고 있습니다.
            </p>
            <p>
              ASR 기술은 도청에도 활용될 수 있습니다. 도청의 목적은 특정 대화
              내용을 파악하는 것으로, ASR 기술을 이용하면 수집된 음성 데이터를
              실시간으로 텍스트로 변환하여 보다 효율적으로 분석할 수 있습니다.
              예를 들어, 도청 장치를 통해 수집된 음성 데이터를 ASR 시스템에
              입력하면, 실시간으로 텍스트가 생성되어 대화 내용을 즉시 확인할 수
              있습니다. 이는 사람이 직접 듣고 분석하는 것보다 훨씬 빠르고
              정확하게 정보를 수집할 수 있게 합니다.
            </p>
            <p>
              따라서 ASR 기술은 도청을 더욱 정교하게 만들 수 있지만, 이를
              방지하기 위한 기술도 중요합니다. 딥러닝 기반 실시간 음성 위장
              체계는 이러한 도청을 교란하는 방법으로, ASR 시스템이 올바르게
              인식하지 못하도록 음성 신호를 변형합니다. 이는 음성 데이터를
              왜곡하거나 특정 소음을 추가하여 도청자가 정확한 정보를 얻지 못하게
              하는 방법입니다. 이러한 기술은 개인 정보 보호와 보안에 있어서
              중요한 역할을 할 수 있습니다.
            </p>
          </div>
        ),
        image: "",
      },
      {
        text: "모델 로그 열기",
        icon: <IconLog width={35} fill="#000"></IconLog>,
        desription: (
          <div className="space-y-4 leading-loose">
            <h1 className="font-bold">
              ASR(Auto Speech Recognition) 음성 인식과 도청으로의 활용가능성
            </h1>
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
              데이터를 컴퓨터가 이해할 수 있는 텍스트로 변환합니다. ASR 시스템은
              딥러닝 알고리즘을 활용해 음향 신호를 분석하고, 이를 텍스트로
              변환하는 과정에서 언어 모델과 발음 사전을 사용합니다. 이러한
              기술은 스마트폰의 음성 비서, 자막 생성, 고객 서비스 자동화 등
              다양한 분야에서 널리 사용되고 있습니다.
            </p>
            <p>
              ASR 기술은 도청에도 활용될 수 있습니다. 도청의 목적은 특정 대화
              내용을 파악하는 것으로, ASR 기술을 이용하면 수집된 음성 데이터를
              실시간으로 텍스트로 변환하여 보다 효율적으로 분석할 수 있습니다.
              예를 들어, 도청 장치를 통해 수집된 음성 데이터를 ASR 시스템에
              입력하면, 실시간으로 텍스트가 생성되어 대화 내용을 즉시 확인할 수
              있습니다. 이는 사람이 직접 듣고 분석하는 것보다 훨씬 빠르고
              정확하게 정보를 수집할 수 있게 합니다.
            </p>
            <p>
              따라서 ASR 기술은 도청을 더욱 정교하게 만들 수 있지만, 이를
              방지하기 위한 기술도 중요합니다. 딥러닝 기반 실시간 음성 위장
              체계는 이러한 도청을 교란하는 방법으로, ASR 시스템이 올바르게
              인식하지 못하도록 음성 신호를 변형합니다. 이는 음성 데이터를
              왜곡하거나 특정 소음을 추가하여 도청자가 정확한 정보를 얻지 못하게
              하는 방법입니다. 이러한 기술은 개인 정보 보호와 보안에 있어서
              중요한 역할을 할 수 있습니다.
            </p>
          </div>
        ),
        image: "",
      },
      {
        text: "카워드 방어 설정",
        icon: <IconKeyword width={35} fill="#000"></IconKeyword>,
        desription: (
          <div className="space-y-4 leading-loose">
            <h1 className="font-bold">
              ASR(Auto Speech Recognition) 음성 인식과 도청으로의 활용가능성
            </h1>
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
              데이터를 컴퓨터가 이해할 수 있는 텍스트로 변환합니다. ASR 시스템은
              딥러닝 알고리즘을 활용해 음향 신호를 분석하고, 이를 텍스트로
              변환하는 과정에서 언어 모델과 발음 사전을 사용합니다. 이러한
              기술은 스마트폰의 음성 비서, 자막 생성, 고객 서비스 자동화 등
              다양한 분야에서 널리 사용되고 있습니다.
            </p>
            <p>
              ASR 기술은 도청에도 활용될 수 있습니다. 도청의 목적은 특정 대화
              내용을 파악하는 것으로, ASR 기술을 이용하면 수집된 음성 데이터를
              실시간으로 텍스트로 변환하여 보다 효율적으로 분석할 수 있습니다.
              예를 들어, 도청 장치를 통해 수집된 음성 데이터를 ASR 시스템에
              입력하면, 실시간으로 텍스트가 생성되어 대화 내용을 즉시 확인할 수
              있습니다. 이는 사람이 직접 듣고 분석하는 것보다 훨씬 빠르고
              정확하게 정보를 수집할 수 있게 합니다.
            </p>
            <p>
              따라서 ASR 기술은 도청을 더욱 정교하게 만들 수 있지만, 이를
              방지하기 위한 기술도 중요합니다. 딥러닝 기반 실시간 음성 위장
              체계는 이러한 도청을 교란하는 방법으로, ASR 시스템이 올바르게
              인식하지 못하도록 음성 신호를 변형합니다. 이는 음성 데이터를
              왜곡하거나 특정 소음을 추가하여 도청자가 정확한 정보를 얻지 못하게
              하는 방법입니다. 이러한 기술은 개인 정보 보호와 보안에 있어서
              중요한 역할을 할 수 있습니다.
            </p>
          </div>
        ),
        image: "",
      },
      {
        text: "문제점 신고",
        icon: <IconEmail width={35} fill="#000"></IconEmail>,
        desription: (
          <div className="space-y-4 leading-loose">
            <h1 className="font-bold">
              ASR(Auto Speech Recognition) 음성 인식과 도청으로의 활용가능성
            </h1>
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
              데이터를 컴퓨터가 이해할 수 있는 텍스트로 변환합니다. ASR 시스템은
              딥러닝 알고리즘을 활용해 음향 신호를 분석하고, 이를 텍스트로
              변환하는 과정에서 언어 모델과 발음 사전을 사용합니다. 이러한
              기술은 스마트폰의 음성 비서, 자막 생성, 고객 서비스 자동화 등
              다양한 분야에서 널리 사용되고 있습니다.
            </p>
            <p>
              ASR 기술은 도청에도 활용될 수 있습니다. 도청의 목적은 특정 대화
              내용을 파악하는 것으로, ASR 기술을 이용하면 수집된 음성 데이터를
              실시간으로 텍스트로 변환하여 보다 효율적으로 분석할 수 있습니다.
              예를 들어, 도청 장치를 통해 수집된 음성 데이터를 ASR 시스템에
              입력하면, 실시간으로 텍스트가 생성되어 대화 내용을 즉시 확인할 수
              있습니다. 이는 사람이 직접 듣고 분석하는 것보다 훨씬 빠르고
              정확하게 정보를 수집할 수 있게 합니다.
            </p>
            <p>
              따라서 ASR 기술은 도청을 더욱 정교하게 만들 수 있지만, 이를
              방지하기 위한 기술도 중요합니다. 딥러닝 기반 실시간 음성 위장
              체계는 이러한 도청을 교란하는 방법으로, ASR 시스템이 올바르게
              인식하지 못하도록 음성 신호를 변형합니다. 이는 음성 데이터를
              왜곡하거나 특정 소음을 추가하여 도청자가 정확한 정보를 얻지 못하게
              하는 방법입니다. 이러한 기술은 개인 정보 보호와 보안에 있어서
              중요한 역할을 할 수 있습니다.
            </p>
          </div>
        ),
        image: "",
      },
    ],
  });
  const [modalOption, setModalOption] = useState({
    isTutorialOpen: true,
    tutorialContentIndex: 0,
    tutorialContent: [
      {
        title: "튜토리얼 시작",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
      {
        title: "도청 방지 모델!",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
      {
        title: "부가 기능!",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
      {
        title: "통계 요약!",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
      {
        title: "튜토리얼 종료",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
    ],
    isModalOpen: false,
    buttonSelected: "",
  });

  const queryButtonOption = useQuery<any>({
    queryKey: ["buttonOption"],
    queryFn: () => buttonOption,
    refetchOnMount: true,
  });

  useEffect(() => {
    // toast(
    //   "👏 안녕하세요!\n\n본 데모 버전에서는 아이디와 비밀번호 없이 로그인하실 수 있습니다.",
    //   {
    //     className: "leading-relaxed text-center font-bold",
    //   }
    // );
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    checkResize();
  }, [isMobile]);

  return (
    <>
      <section className="h-screen w-full select-none flex-col justify-start items-center relative">
        <div
          className={`flex h-full w-full flex-col items-center justify-start gap-2 pb-6 pt-2 px-4 max-w-[400px] mx-auto`}
        >
          <Header></Header>
          <div className="w-full h-full flex flex-col gap-y-8">
            {selected == "부가 기능" ? (
              <div className="flex flex-col justify-between row-span-2 items-center aspect-[4/3]">
                <Tooltip
                  content={"AI 도청 방지 모델을 동작하는 버튼입니다."}
                  showArrow
                  isOpen={
                    modalOption.isTutorialOpen &&
                    modalOption.tutorialContentIndex == 1
                  }
                  placement={"bottom"}
                  color={"primary"}
                  size={"lg"}
                  className="max-w-[150px]"
                >
                  <Button
                    ref={buttonRef}
                    // disableAnimation={true}
                    radius={"none"}
                    fullWidth
                    className={`w-full font-bold col-span-2 h-full drop-shadow-md p-0 relative aspect-[4/3] ${
                      buttonOption.isModelActivated ? "" : "bg-red-50"
                    }`}
                    color={
                      buttonOption.isModelActivated ? "primary" : "default"
                    }
                    variant={buttonOption.isModelActivated ? "shadow" : "flat"}
                    onClick={async () => {
                      console.log(buttonRef.current);
                      await setButtonOption({
                        ...buttonOption,
                        isModelActivated: !buttonOption.isModelActivated,
                      });
                      await queryButtonOption.refetch();
                    }}
                  >
                    <div className="flex flex-col items-center relative justify-center">
                      {/* <div className="z-0 fixed top-4 rounded-lg overflow-clip -rotate-180">
                      {buttonOption.isModelActivated && (
                        <AudioVisualizer
                          mode={"bars"}
                          height="30px"
                          width="100%"
                          bgColor="#005BC4"
                          barColor="#D1F4E0"
                        />
                      )}
                    </div> */}
                      <div
                        className={`h-[150px] flex  flex-col justify-center overflow-y-clip`}
                      >
                        {buttonOption.isModelActivated ? (
                          <LottieSecurityCheck
                            width={200}
                            height={200}
                            color="blue"
                            play
                            loop
                          ></LottieSecurityCheck>
                        ) : (
                          <LottieSecurityCheck
                            width={200}
                            height={200}
                            color="red"
                          ></LottieSecurityCheck>
                        )}
                      </div>
                      <div className="flex flex-col z-50">
                        <p className="text-md">AI 도청 방지 모델</p>
                        <p className="text-lg">
                          {buttonOption.isModelActivated
                            ? "동작 중"
                            : "꺼져 있음"}
                        </p>
                      </div>
                      <div className="absolute -bottom-4 z-0 rounded-sm overflow-clip">
                        {buttonOption.isModelActivated && (
                          <AudioVisualizer
                            mode={"bars"}
                            height="30px"
                            width="100%"
                            bgColor="#005BC4"
                            barColor="#fff"
                          />
                        )}
                      </div>
                    </div>
                  </Button>
                </Tooltip>
              </div>
            ) : (
              <div className="flex h-fit w-full row-span-2 aspect-[4/3] max-h-[300px]">
                <Line
                  data={{
                    labels: [1, 2, 3, 4, 5],
                    datasets: [
                      {
                        label: "Original Sound",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        // fill: true,
                        borderWidth: 3,
                        borderColor: "#00000050",
                        tension: 0.3,
                        backgroundColor: "#00000050",
                      },
                      {
                        label: "Predictive Attack",
                        data: [55, 40, 65, 59, 80, 81, 56],
                        borderWidth: 3,
                        borderColor: "#005BC450",
                        tension: 0.3,
                        backgroundColor: "#005BC450",
                      },
                    ],
                  }}
                  options={{
                    spanGaps: 20,
                    maintainAspectRatio: false,
                    responsive: true,
                    animation: {
                      duration: 500,
                    },
                  }}
                ></Line>
              </div>
            )}
            <div className="h-fit w-full row-span-3">
              <Tabs
                variant={"bordered"}
                aria-label="Options"
                fullWidth
                color={"default"}
                size={"lg"}
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key)}
                radius={"none"}
                classNames={{ cursor: "bg-[#E6E6E7]" }}
              >
                <Tab
                  key="부가 기능"
                  title={
                    <Tooltip
                      content={"부가 기능입니다."}
                      showArrow
                      isOpen={
                        modalOption.isTutorialOpen &&
                        modalOption.tutorialContentIndex == 2
                      }
                      placement={"bottom"}
                      color={"primary"}
                      size={"lg"}
                      className="max-w-[150px]"
                    >
                      <p>부가 기능</p>
                    </Tooltip>
                  }
                >
                  <div>
                    <div className="flex flex-col gap-4 w-full items-center overflow-y-scroll">
                      {buttonOption.buttonContent.map((e: any, i: number) => {
                        return (
                          <Button
                            key={i}
                            variant={"flat"}
                            className="h-[60px] text-sm"
                            fullWidth
                            size={"lg"}
                            onPress={() => {
                              setModalOption({
                                ...modalOption,

                                isModalOpen: true,
                                buttonSelected: e.text,
                              });
                            }}
                          >
                            <div className="w-full h-full flex flex-row justify-between items-center font-bold">
                              <div>{e.icon}</div>
                              {e.text}
                              <div className="opacity-0">{e.icon}</div>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </Tab>
                <Tab
                  key="통계 요약"
                  title={
                    <Tooltip
                      content={"통계 요약입니다."}
                      showArrow
                      isOpen={
                        modalOption.isTutorialOpen &&
                        modalOption.tutorialContentIndex == 3
                      }
                      placement={"bottom"}
                      color={"primary"}
                      size={"lg"}
                      className="max-w-[150px]"
                    >
                      <p>통계 요약</p>
                    </Tooltip>
                  }
                >
                  <div className="flex flex-col gap-4 w-full items-center">
                    {[
                      { text: "전체 발화 시간", value: 421 },
                      { text: "식별된 발화 시간", value: 421 },
                      { text: "방어한 발화 시간", value: 421 },
                      { text: "식발한 단어 수", value: 421 },
                      { text: "ASR 방어에 성공한 글자", value: 421 },
                      { text: "ASR 방어에 성공한 단어", value: 318 },
                      { text: "ASR 방어에 성공한 문장", value: 275 },
                    ].map((e, i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-row w-full justify-between items-center h-[20px]"
                        >
                          <p
                            key={i}
                            className="text-sm flex flex-col justify-center"
                          >
                            {e.text}
                          </p>
                          <p
                            key={i}
                            className="text-sm flex flex-col justify-center"
                          >
                            {e.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <Toaster></Toaster>
      <Modal
        isOpen={modalOption.isModalOpen}
        size={mobile ? "full" : "2xl"}
        placement={"bottom"}
        scrollBehavior={"inside"}
      >
        <ModalContent className="pb-6">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalOption.buttonSelected}
              </ModalHeader>
              <ModalBody>{buttonOption.buttonContent[0].desription}</ModalBody>
              <ModalFooter className="w-full flex flex-row items-stretch justify-center">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setModalOption({ ...modalOption, isModalOpen: false });
                  }}
                  size={"sm"}
                >
                  돌아가기
                </Button>
                {/* <Button color="primary" onPress={onClose} size={"sm"}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={modalOption.isTutorialOpen} placement={"bottom"}>
        <ModalContent className="pb-6">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {
                  modalOption.tutorialContent[modalOption.tutorialContentIndex]
                    .title
                }
              </ModalHeader>
              <ModalBody>
                {
                  modalOption.tutorialContent[modalOption.tutorialContentIndex]
                    .desription
                }
              </ModalBody>
              <ModalFooter className="w-full flex flex-row items-stretch justify-center">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    if (modalOption.tutorialContentIndex != 0) {
                      setModalOption({
                        ...modalOption,
                        tutorialContentIndex:
                          modalOption.tutorialContentIndex - 1,
                      });
                    }
                  }}
                  disabled={modalOption.tutorialContentIndex == 0}
                  size={"sm"}
                >
                  이전으로
                </Button>
                <Button
                  color={"default"}
                  variant="light"
                  onPress={() => {
                    setModalOption({ ...modalOption, isTutorialOpen: false });
                  }}
                  size={"sm"}
                >
                  넘어가기
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    if (
                      modalOption.tutorialContentIndex !=
                      modalOption.tutorialContent.length - 1
                    ) {
                      setModalOption({
                        ...modalOption,
                        tutorialContentIndex:
                          modalOption.tutorialContentIndex + 1,
                      });
                    } else {
                      setModalOption({
                        ...modalOption,
                        isTutorialOpen: false,
                      });
                    }
                  }}
                  disabled={
                    modalOption.tutorialContentIndex ==
                    modalOption.tutorialContent.length - 1
                  }
                  size={"sm"}
                  variant={"light"}
                >
                  {modalOption.tutorialContentIndex !=
                  modalOption.tutorialContent.length - 1
                    ? "다음으로"
                    : "시작하기"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
