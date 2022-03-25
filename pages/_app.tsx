import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>abol.binandeh@gmail.com</title>
        <meta
          name="description"
          content="در ویرگول همه می‌تونن بنویسن. ویرگول یک شبکه اجتماعی برای خواندن و نوشتن متن و محتوای فارسی است"
        />
        <link rel="icon" href="/virgol.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
