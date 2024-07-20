import { useMediaQuery } from "react-responsive";

export const useIsDesktop = () => {
  const isDesktop = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  return isDesktop;
};

export const useIsMobile = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });
  return isMobile;
};
