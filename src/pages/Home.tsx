import "../hooks/init";

import { Services } from "../components/Services";
import { ShowcaseIntro } from "../components/Showcase";
import useGeneralInfo from "../hooks/useGeneralInfo";

const IntroSection = () => {
  const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN");

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-4 max-w-4xl mx-auto text-center">
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-5/6 mx-auto" />
            <div className="skeleton h-6 w-4/5 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !generalInfo?.intro) {
    return null;
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in text-center">
            {generalInfo.intro.map((paragraph, index) => (
              <p
                key={index}
                className="text-body-lg text-text-primary dark:text-dark-text-primary leading-relaxed text-balance animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      {/* <Showcase limit={true} /> */}
      <Services />
      <IntroSection />
      <ShowcaseIntro></ShowcaseIntro>
      {/* <Works /> */}
      {/* <ImagePanel /> */}
      {/* <About /> */}
    </>
  );
};
