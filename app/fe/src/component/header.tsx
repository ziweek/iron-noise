import { Button } from "@nextui-org/react";
import { IconGithub, IconLinkedIn, IconLogo } from "./common/icons";
import { LottieSecurityCheck } from "./common/lotties";
import { useQuery } from "@tanstack/react-query";

export default function Header(props: any) {
  const queryButtonOption = useQuery<any>({
    queryKey: ["buttonOption"],
    queryFn: () => {},
    refetchOnMount: true,
  });

  return (
    <section
      className={`top-0 z-50 min-h-[60px] w-full pb-6 ${
        props.isFixed ? "" : ""
      }`}
    >
      <div className="flex h-[60px] w-full select-none flex-row gap-1 justify-between items-center">
        <div className="flex flex-row">
          <div
            className={`h-[40px] w-[30px] flex flex-col justify-center overflow-x-clip`}
          >
            {queryButtonOption.data?.isModelActivated ? (
              <LottieSecurityCheck
                width={50}
                height={50}
                color="blue"
                play
                loop
              ></LottieSecurityCheck>
            ) : (
              <LottieSecurityCheck
                width={50}
                height={50}
                color="red"
              ></LottieSecurityCheck>
            )}
          </div>
          <IconLogo fill="#000" width={100}></IconLogo>
        </div>
        <div className="flex h-fit flex-row gap-4">
          <Button
            isIconOnly
            color={"primary"}
            variant={"light"}
            size={"sm"}
            onPress={() => {
              window.open("https://github.com/ziweek");
            }}
          >
            <IconGithub fill="#1D4A83" width={"30px"}></IconGithub>
          </Button>
          <Button
            isIconOnly
            variant={"light"}
            color={"primary"}
            size={"sm"}
            onPress={() => {
              window.open("https://www.linkedin.com/in/jiuk-kim-42248325a/");
            }}
          >
            <IconLinkedIn fill="#1D4A83" width={"30px"}></IconLinkedIn>
          </Button>
        </div>
      </div>
    </section>
  );
}