"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme } from "next-themes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "regenerator-runtime/runtime";

const queryClient = new QueryClient();

export default function AppProvider({ children }: any) {
  const { systemTheme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} position={"right"} />
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme={"light"}>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
