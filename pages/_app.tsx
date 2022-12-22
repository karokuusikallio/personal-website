import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from "@next/font/google";

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
