import "../styles/style.scss";
import "../styles/tools.scss";
import "../styles/work.scss";
import "../styles/police.css";
import "../styles/card.scss";
import "../styles/projet.scss";
import "../styles/navbar.scss";
import "../styles/alter.scss";
import "../styles/rocketbutton.scss";
import "../styles/freeze.scss";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { StrictMode, useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const [showLoadingPage, setShowLoadingPage] = useState(true);

  useEffect(() => {
    const devEnv = process?.env?.NODE_ENV === "development";
    if (!devEnv) {
      window.addEventListener("DOMContentLoaded", () => {
        navigator.serviceWorker.register("../../arc-sw.js").then(
          (registration) => {
            console.log("Arc service worker successful with scope: ", registration.scope);
          },
          (err) => {
            console.log("Arc service worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;
