import Head from "next/head";
import Picture from "../components/Picture";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import EarthCanvas from "../components/Earth";
import AlternanceList from "../components/alternance";
import RocketButton from "../components/rocketb";
import Frise from "../components/freeze";
import CVGit from "../components/cvgit";
import { FC, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";
import { Partytown } from '@builder.io/partytown/react';
import { FaLess } from "react-icons/fa";
import years from "../../src/dateData";
const LayoutGroup = dynamic(() => import('framer-motion').then((mod) => mod.LayoutGroup), {
  ssr: false,
})

const DynamicNav = dynamic(() => import("../components/Nav"));

const Home: FC = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <>
      <Head>
        <Partytown debug={false} forward={['dataLayer.push']}/>
        <title>Morais Vincent</title>
        <meta
          name="description"
        />

      </Head>
      <LayoutGroup>
        {typeof window !== "undefined" && <DynamicNav />}
        <Picture />
        <Work />
        <Tools />
        <AlternanceList />
        <Frise />
        <CVGit />
        <Contact />
      </LayoutGroup>
      {scrollTop && <ScrollTop />}
    </>
  );
};

export default Home;