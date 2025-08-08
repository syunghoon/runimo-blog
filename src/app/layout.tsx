import Header from "./_components/header";
import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { headers } from "next/headers";

import "./globals.css";

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const domain = headersList.get("host") ?? "";
  const isProdDomain = domain === "example.com";

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>{/* favicon, meta tags 등 */}</head>
      <body className="bg-primary-bg text-primary-gray">
        {isProdDomain && gtmId && gaId && (
          <>
            <GoogleTagManager gtmId={gtmId} />
            <GoogleAnalytics gaId={gaId} />
          </>
        )}
        <Header />
        <div className="min-h-screen pt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
