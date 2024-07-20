import { CircularProgress } from "@nextui-org/react";

export default function loading(props: any) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <CircularProgress></CircularProgress>
    </div>
  );
}
