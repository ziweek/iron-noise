import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "./provider";

const nanumSquareNeo = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareNeoTTF-bRg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareNeoTTF-cBd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title:
    "철벽소리 | 인공지능 도청을 교란하는, 딥러닝 기반 실시간 음성 위장 체계",
  description: "인공지능 도청을 교란하는, 딥러닝 기반 실시간 음성 위장 체계",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${nanumSquareNeo.className}`}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="application-name" content="철벽소리" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="철벽소리" />
        <meta
          name="description"
          content="인공지능 도청을 교란하는, 딥러닝 기반 실시간 음성 위장 체계"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
