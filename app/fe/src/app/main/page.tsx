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
  const [buttonOption, setButtonOption] = useState<any>({
    isModelActivated: false,
  });
  const [selected, setSelected] = useState<any>("부가 기능");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [modalOption, setModalOption] = useState({
    isTutorialOpen: true,
    tutorialContentIndex: 0,
    tutorialContent: [
      { title: "안녕하세요!", desription: "", image: "" },
      { title: "도청 방지 모델!", desription: "", image: "" },
      { title: "부가 기능!", desription: "", image: "" },
      { title: "통계 요약!", desription: "", image: "" },
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
          className={`flex h-full w-full flex-col items-center justify-start gap-2 pb-6 pt-2 px-4 max-w-[600px] mx-auto`}
        >
          <Header></Header>
          <div className="w-full h-full grid-cols-1 grid-rows-5 grid gap-y-8">
            {selected == "부가 기능" ? (
              <div className="flex flex-col justify-between row-span-2 items-center">
                {/* <div className="w-full h-[50px]">
                  {buttonOption.isModelActivated && (
                    <AudioVisualizer
                      mode={"wave"}
                      height="50px"
                      width="100%"
                      bgColor="#fff"
                      barColor="#005BC4"
                    />
                  )}
                </div> */}
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
                >
                  <Button
                    ref={buttonRef}
                    // disableAnimation={true}
                    radius={"none"}
                    fullWidth
                    className={`w-full font-bold col-span-2 h-full drop-shadow-md p-0 relative ${
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
              <div className="flex h-full w-full row-span-2">
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
                    >
                      <p>부가 기능</p>
                    </Tooltip>
                  }
                >
                  <div>
                    <div className="flex flex-col gap-4 w-full items-center overflow-y-scroll">
                      {[
                        {
                          text: "음성 보안 이해",
                          icon: (
                            <IconManual width={35} fill="#000"></IconManual>
                          ),
                        },
                        {
                          text: "모델 로그 열기",
                          icon: <IconLog width={35} fill="#000"></IconLog>,
                        },
                        {
                          text: "카워드 방어 설정",
                          icon: (
                            <IconKeyword width={35} fill="#000"></IconKeyword>
                          ),
                        },
                        {
                          text: "문제점 신고",
                          icon: <IconEmail width={35} fill="#000"></IconEmail>,
                        },
                      ].map((e, i) => {
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
                          className="flex flex-row w-full justify-between items-center h-[30px]"
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
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalOption.buttonSelected}
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setModalOption({ ...modalOption, isModalOpen: false });
                  }}
                >
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={modalOption.isTutorialOpen} placement={"bottom"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {
                  modalOption.tutorialContent[modalOption.tutorialContentIndex]
                    .title
                }
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
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
                >
                  이전으로
                </Button>
                <Button
                  color={"default"}
                  variant="light"
                  onPress={() => {
                    setModalOption({ ...modalOption, isModalOpen: false });
                  }}
                  disabled={modalOption.tutorialContentIndex == 0}
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
