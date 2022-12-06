import "../hooks/init";

import React, { useEffect, useState } from "react";

import { DisplayCategory } from "../components/DisplayCategorie";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { ShowcaseIntro } from "../components/Showcase";

export const Home = () => {
  return (
    <>
      {/* <Showcase limit={true} /> */}
      <ShowcaseIntro></ShowcaseIntro>
      <Services />
      {/* <Works /> */}
      {/* <ImagePanel></ImagePanel> */}
      <About />
    </>
  );
};
