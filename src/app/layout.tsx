import Header from "./_components/header";
import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { headers } from "next/headers";

import "./globals.css";

export const metadata: Metadata = {
  title: `러닝 습관 형성 서비스, 러니모`,
  description: `첫걸음이 어렵다면 우리와 함께해요! 게임을 통한 러닝 습관 형성 서비스, 러니모`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const domain = headersList.get("host");
  const isProdDomain = domain === "runimo-blog.vercel.app";

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-primary-bg text-primary-gray">
        {isProdDomain && (
          <>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
          </>
        )}
        <Header />
        <div className="min-h-screen pt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
