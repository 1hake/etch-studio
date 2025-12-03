import "../hooks/init";

import { Services } from "../components/Services";
import { ShowcaseIntro } from "../components/Showcase";
import useGeneralInfo from "../hooks/useGeneralInfo";

const HeaderImage = () => {
  const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN");

  if (loading) {
    return (
      <section className="w-full h-64 md:h-96">
        <div className="skeleton w-full h-full" />
      </section>
    );
  }

  if (error || !generalInfo?.image_en_tete) {
    return null;
  }

  return (
    <section className="w-full h-64 md:h-96 overflow-hidden">
      <img
        src={generalInfo.image_en_tete}
        alt="Etch Studio"
        className="w-full h-full object-cover animate-fade-in"
      />
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <HeaderImage />
      {/* <Showcase limit={true} /> */}
      <Services />
      <ShowcaseIntro></ShowcaseIntro>
      {/* <Works /> */}
      {/* <ImagePanel /> */}
      {/* <About /> */}
    </>
  );
};
