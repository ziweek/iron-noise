"use client";

import { LottieSecurityCheck } from "@/component/common/lotties";
import Header from "@/component/header";
import { useIsMobile } from "@/hook/useMediaQuery";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

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

export default function Home() {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [buttonOption, setButtonOption] = useState<any>({
    isModelActivated: false,
    // isWaveformVisible: false,
    // isTranscriptionVisible: false,
  });
  const [selected, setSelected] = useState<any>("지시 사항");

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
      <section className="h-screen w-full select-none flex-col">
        <div
          className={`flex h-full w-full flex-col items-center justify-start gap-4 pb-12 pt-2  px-4`}
        >
          <Header></Header>
          <div className="w-full h-full grid-cols-1 grid-rows-2 grid gap-y-8">
            {selected == "지시 사항" ? (
              <Button
                fullWidth
                className="w-full font-bold text-xl col-span-2 h-full"
                color={buttonOption.isModelActivated ? "primary" : "default"}
                variant={buttonOption.isModelActivated ? "shadow" : "faded"}
                onClick={async () => {
                  await setButtonOption({
                    ...buttonOption,
                    isModelActivated: !buttonOption.isModelActivated,
                  });
                  await queryButtonOption.refetch();
                }}
              >
                <div className="flex flex-col">
                  <div
                    className={`${
                      mobile ? "h-[220px]" : "h-[300px]"
                    } flex  flex-col justify-center overflow-y-clip`}
                  >
                    {buttonOption.isModelActivated ? (
                      <LottieSecurityCheck
                        width={300}
                        height={300}
                        color="blue"
                        play
                        loop
                      ></LottieSecurityCheck>
                    ) : (
                      <LottieSecurityCheck
                        width={300}
                        height={300}
                        color="red"
                      ></LottieSecurityCheck>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>AI 도청 교란 모델</p>
                    <p className="text-3xl">
                      {buttonOption.isModelActivated ? "동작 중" : "꺼져 있음"}
                    </p>
                  </div>
                </div>
              </Button>
            ) : (
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
            )}
            {/* <div
            className={`flex h-fit w-full flex-col items-center justify-center gap-4`}
          >
            <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full">
              <Button
                fullWidth
                className="w-full font-bold text-xl col-span-2 h-fit pb-8"
                color={buttonOption.isModelActivated ? "primary" : "default"}
                variant={"shadow"}
                onClick={() => {
                  setButtonOption({
                    ...buttonOption,
                    isModelActivated: !buttonOption.isModelActivated,
                  });
                }}
              >
                <div className="flex flex-col">
                  <div
                    className={`${
                      mobile ? "h-[250px]" : "h-[300px]"
                    } flex  flex-col justify-center overflow-y-clip`}
                  >
                    {buttonOption.isModelActivated ? (
                      <LottieSecurityCheck
                        width={300}
                        height={300}
                        color="blue"
                        play
                        loop
                      ></LottieSecurityCheck>
                    ) : (
                      <LottieSecurityCheck
                        width={300}
                        height={300}
                        color="blue"
                      ></LottieSecurityCheck>
                    )}
                  </div>
                  {buttonOption.isModelActivated
                    ? "방화벽 동작 중"
                    : "방화벽 꺼져 있음"}
                </div>
              </Button>
              <Button
                fullWidth
                className="h-[60px] w-full font-bold text-xl"
                color={buttonOption.isWaveformVisible ? "primary" : "default"}
                variant={"shadow"}
                onClick={() => {
                  setButtonOption({
                    ...buttonOption,
                    isWaveformVisible: !buttonOption.isWaveformVisible,
                  });
                }}
              >
                음형 보기
              </Button>
              <Button
                fullWidth
                className="h-[60px] w-full font-bold text-xl"
                color={
                  buttonOption.isTranscriptionVisible ? "primary" : "default"
                }
                variant={"shadow"}
                onClick={() => {
                  setButtonOption({
                    ...buttonOption,
                    isTranscriptionVisible:
                      !buttonOption.isTranscriptionVisible,
                  });
                }}
              >
                텍스트 보기
              </Button>
            </div>
          </div> */}
            <div className="h-fit w-full">
              <Tabs
                aria-label="Options"
                fullWidth
                color={"default"}
                size={"lg"}
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key)}
                classNames={{ tabList: "h-[60px]", tab: "h-[60px]" }}
              >
                <Tab key="지시 사항" title="지시 사항">
                  <div className="flex flex-col gap-4 w-full items-center">
                    {[1, 2, 3, "보안 측정하기"].map((e, i) => {
                      return (
                        <Button
                          key={i}
                          variant={"light"}
                          className="h-[60px] text-lg"
                          fullWidth
                        >
                          동작 1
                        </Button>
                      );
                    })}
                  </div>
                </Tab>
                <Tab key="통계 요약" title="통계 요약">
                  <div className="flex flex-col gap-4 w-full items-center">
                    {[1, 2, 3, "보안 측정하기"].map((e, i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-row w-full justify-between items-center"
                        >
                          <p
                            key={i}
                            className="h-[60px] text-lg flex flex-col justify-center"
                          >
                            동작 1
                          </p>
                          <p
                            key={i}
                            className="h-[60px] text-lg flex flex-col justify-center"
                          >
                            동작 1
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
    </>
  );
}
