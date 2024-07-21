import { useMediaQuery } from "react-responsive";

export const useIsDesktop = () => {
  const isDesktop = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  return isDesktop;
};

export const useIsTablet = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return isTablet;
};

export const useIsMobile = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return isMobile;
};
