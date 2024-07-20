"use client";

import useIsDevToolsOpen from "@/hook/useDevtoolsDetector";
import { LottieSecurityCheck } from "@/component/common/lotties";
import { useIsMobile } from "@/hook/useMediaQuery";
import { useEffect, useState } from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDevtoolsOpen = useIsDevToolsOpen();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

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

  return (
    <section>
      {isDevtoolsOpen ? (
        <div className="flex h-screen w-screen select-none flex-col items-center justify-center gap-8">
          <div className="h-[200px] w-fit overflow-clip">
            <LottieSecurityCheck
              loop
              play
              height={250}
              color={"red"}
            ></LottieSecurityCheck>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className={`font-bold ${mobile ? "text-lg" : "text-xl"}`}>
              클라이언트에서 개발자 도구가 감지되었습니다.
            </p>
            <p className={`${mobile ? "text-sm" : "text-md"}`}>
              이는 관리자에게 악의적인 사용으로 보고될 수 있습니다.
            </p>
          </div>
        </div>
      ) : (
        children
      )}
    </section>
  );
}
