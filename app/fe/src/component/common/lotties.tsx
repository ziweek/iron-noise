import Lottie from "react-lottie-player";
import lottieSearchJson from "../../../public/lottie/lottie-search.json";
import lottieCongratulationsJson from "../../../public/lottie/congratulations.json";
import lottieComplete from "../../../public/lottie/complete.json";
import lottieArrowDown from "../../../public/lottie/arrow.json";
import lottieSecurityCheckBlue from "../../../public/lottie/security-check-blue.json";
import lottieSecurityCheckRed from "../../../public/lottie/security-check-red.json";
import lottieDotCircle from "../../../public/lottie/dot-circling.json";

type PropsForLottie = {
  width?: any;
  height?: any;
  loop?: boolean;
  play?: boolean;
  goTo?: number;
  color?: string;
};

export function LottieSearch(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieSearchJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieCongratulations(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieCongratulationsJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieComplete(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieComplete}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}

      //   onComplete={props.onComplete}
    />
  );
}

export function LottieSecurityCheck(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={
        params.color == "red" ? lottieSecurityCheckRed : lottieSecurityCheckBlue
      }
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieArrowDown(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieArrowDown}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieDotCircle(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieDotCircle}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}
