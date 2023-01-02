import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Poppins } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

import "../styles/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const poppins300 = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export const poppins400 = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const poppins500 = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Karo Kuusikallio</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/karo-favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/karo-favicon-16.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TRACKING_ID}`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${process.env.GOOGLE_TRACKING_ID}');
            `,
        }}
      />
      <div className={`mainDiv ${poppins300.className}`}>
        <div className="container">
          <Header />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
