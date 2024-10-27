import { Button, Chip } from "@nextui-org/react";
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
      className={`top-0 z-50 h-[40px] w-full ${props.isFixed ? "" : ""}`}
    >
      <div className="flex h-[40px] w-full select-none flex-row gap-1 justify-between items-center">
        <div className="flex flex-row space-x-2">
          <IconLogo fill="#000" width={100}></IconLogo>
          {queryButtonOption.data?.isModelActivated ? (
            <Chip color="primary" radius={"sm"}>
              동작 중
            </Chip>
          ) : (
            <></>
          )}
          <div
          // className={`h-[40px] w-[40px] flex flex-col justify-center overflow-x-clip`}
          ></div>
        </div>
        <div className="flex h-fit flex-row gap-2">
          <Button
            isIconOnly
            color={"primary"}
            variant={"light"}
            size={"sm"}
            onPress={() => {
              window.open("https://github.com/ziweek");
            }}
          >
            <IconGithub fill="#000" width={"20px"}></IconGithub>
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
            <IconLinkedIn fill="#000" width={"20px"}></IconLinkedIn>
          </Button>
          {/* <Button
            isIconOnly
            variant={"light"}
            color={"primary"}
            size={"sm"}
            onPress={() => {
              window.open("https://www.linkedin.com/in/jiuk-kim-42248325a/");
            }}
          >
            <IconSetting fill="#1D4A83" width={"25px"}></IconSetting>
          </Button> */}
        </div>
      </div>
    </section>
  );
}
