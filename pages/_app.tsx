import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from "@next/font/google";

import "../styles/main.scss";
import Header from "../components/Header";

const poppins200 = Poppins({
  subsets: ["latin"],
  weight: ["200"],
});

export const poppins300 = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Karo Kuusikallio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`mainDiv ${poppins200.className}`}>
        <div className="container">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
