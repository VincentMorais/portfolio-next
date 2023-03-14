import "../styles/style.scss";
import "../styles/tools.scss";
import "../styles/work.scss";
import "../styles/police.css";
import "../styles/card.scss"
import "../styles/projet.scss"
import "../styles/navbar.scss"
import "../styles/alter.scss"
import "../styles/rocketbutton.scss"
import "../styles/freeze.scss"

import LoadingPage from "@/components/chargement";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { StrictMode, useEffect, useState } from "react";


const App = ({ Component, pageProps }: AppProps) => {
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  useEffect(() => {
    let devEnv = process && process.env.NODE_ENV === "development";
    if (!devEnv) {
      window.addEventListener("DOMContentLoaded", function () {
        navigator.serviceWorker.register("../../arc-sw.js").then(
          function (registration) {
            console.log("Arc service worker successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Arc service worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingPage(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoadingPage) {
    return <LoadingPage />;
  }

  return <Component {...pageProps} />;
};

export default App;