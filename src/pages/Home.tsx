import "../hooks/init";

import { Intro } from "../components/Intro";
import { Services } from "../components/Services";
import { ShowcaseIntro } from "../components/Showcase";

export const Home = () => {
  return (
    <>
      {/* <Showcase limit={true} /> */}
      <Intro></Intro>
      <Services />
      <ShowcaseIntro></ShowcaseIntro>
      {/* <Works /> */}
      {/* <ImagePanel /> */}
      {/* <About /> */}
    </>
  );
};
