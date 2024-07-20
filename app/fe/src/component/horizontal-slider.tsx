import { Button, Card, Chip } from "@nextui-org/react";

export default function HorizontalSlider(props: any) {
  return (
    <div className="grid w-full flex-col gap-1">
      {props.isHeaderVisible && (
        <div className="flex w-full flex-row items-center justify-between">
          <p className="px-4 text-lg font-bold ">{props.title}</p>
          <Button
            variant={"light"}
            disableRipple
            color={"primary"}
            className="font-bold underline underline-offset-4"
          >
            더 보기
          </Button>
        </div>
      )}
      <div className="flex gap-2 overflow-x-scroll px-4 scrollbar-hide">
        <div className="flex gap-4 flex-nowrap pb-2">
          {props.content.map((e: any, i: any) => {
            return (
              <Card
                isPressable={props.isPressable}
                key={i}
                className={`shadow-black-90 rounded-lg border-1 bg-center p-4 bg-blend-darken shadow-md`}
                style={{
                  backgroundColor: props.backgroundColor,
                  width: props.width + "px",
                  height: props.height + "px",
                  backgroundImage: `url('${e.bgImgSrc}')`,
                  color: props.textColor,
                }}
                onPress={() => {
                  window.open(e.link);
                }}
              >
                <div className="flex h-full w-full flex-col items-start justify-between gap-2">
                  <div className="flex flex-col gap-2">
                    <p
                      className={`${
                        props.height >= 200 ? "text-lg" : "text-md"
                      } text-pretty line-clamp-2 w-full whitespace-normal break-keep text-start font-bold`}
                    >
                      {e.title}
                    </p>
                    {e?.tags && e?.tags != null && (
                      <div className="flex flex-row flex-wrap gap-2">
                        {e.tags.map((e: any, i: any) => (
                          <Chip
                            key={i}
                            variant={"solid"}
                            radius={"sm"}
                            size={"sm"}
                            className="opacity-75"
                          >
                            #{e}
                          </Chip>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-pretty line-clamp-4 w-full whitespace-normal text-start text-sm ">
                    {e.text}
                  </p>
                  {e?.badge && e?.badge != null && (
                    <div className="flex max-h-[60px] w-full flex-col items-end justify-center">
                      {e.badge}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
