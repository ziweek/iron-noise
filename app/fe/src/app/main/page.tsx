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
      <section className="h-screen w-full select-none flex-col justify-start items-center">
        <div
          className={`flex h-full w-full flex-col items-center justify-start gap-2 pb-6 pt-2 px-4`}
        >
          <Header></Header>
          <div className="w-full h-full grid-cols-1 grid-rows-5 grid gap-y-4">
            {selected == "지시 사항" ? (
              <Button
                radius={"none"}
                fullWidth
                className="w-full font-bold col-span-2 h-full row-span-2 drop-shadow-md"
                color={buttonOption.isModelActivated ? "primary" : "default"}
                variant={buttonOption.isModelActivated ? "shadow" : "flat"}
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
                      mobile ? "h-[150px]" : "h-[300px]"
                    } flex  flex-col justify-center overflow-y-clip`}
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
                  <div className="flex flex-col">
                    <p className="text-md">AI 도청 교란 모델</p>
                    <p className="text-lg">
                      {buttonOption.isModelActivated ? "동작 중" : "꺼져 있음"}
                    </p>
                  </div>
                </div>
              </Button>
            ) : (
              <div className="flex h-full w-full row-span-2">
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
                ></Bar>
              </div>
            )}
            <div className="h-fit w-full row-span-3">
              <Tabs
                aria-label="Options"
                fullWidth
                color={"default"}
                size={"lg"}
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key)}
                classNames={{ tabList: "", tab: "" }}
                radius={"none"}
              >
                <Tab key="지시 사항" title="지시 사항">
                  <div>
                    <div className="flex flex-col gap-4 w-full items-center overflow-y-scroll">
                      {[1, 2, 3, "보안 측정하기"].map((e, i) => {
                        return (
                          <Button
                            key={i}
                            variant={"light"}
                            className="h-[40px] text-sm"
                            fullWidth
                          >
                            동작 1
                          </Button>
                        );
                      })}
                    </div>
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
                            className="h-[40px] text-sm flex flex-col justify-center"
                          >
                            동작 1
                          </p>
                          <p
                            key={i}
                            className="h-[40px] text-sm flex flex-col justify-center"
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
