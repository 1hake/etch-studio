import "../hooks/init";

import { Services } from "../components/Services";
import { ShowcaseIntro } from "../components/Showcase";
import { LampeVinyl } from "../components/LampeVinyl";
import useGeneralInfo from "../hooks/useGeneralInfo";


export const Home = () => {
  return (
    <>
      {/* <Showcase limit={true} /> */}
      <Services />
      <ShowcaseIntro limit={true}></ShowcaseIntro>
      <LampeVinyl />
      {/* <Works /> */}
      {/* <ImagePanel /> */}
      {/* <About /> */}
    </>
  );
};
