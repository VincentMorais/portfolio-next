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
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { StrictMode, useEffect } from "react";


const App = ({ Component, pageProps }: AppProps) => {
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
  
  return (
    <StrictMode>

        
        <Component {...pageProps} />
        

      
    </StrictMode>
    
  );
};

export default App;