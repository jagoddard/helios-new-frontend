import { useState, createContext } from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Script from 'next/script';
import AppLoginContext from "../components/AppLoginContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")
  return (
    <AppLoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, setToken }}>
      <Head>
        <title>D2 Lithium</title>
      </Head>
      <main className="">

        <Component {...pageProps}></Component>
        <Script
          src="https://qmod.quotemedia.com/js/qmodLoader.js"
          id="qmod"
          type="application/javascript"
          data-qmod-wmid="104470"
        />
      </main>
    </AppLoginContext.Provider>
  );
}

export default MyApp