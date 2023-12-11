const Section = (props) => {
  const { children } = props;

  return (
    <section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
    >
      {children}
    </section>
  );
};
import React from "react";

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
    </div>
  );
};

export default Interface;

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-5xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 ">Domonique Eccleston</span>
      </h1>
      <p className="text-lg text-gray-600 stroke-white-950 mt-4">
        I'm a front-end developer with expertise
        <br />
        in ReactJS and Tailwind CSS.
        <br />
        <br />
        Aspiring to become a full-stack developer.
      </p>
      <button
        className={`bg-teal-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
      >
        Contact me
      </button>
    </Section>
  );
};
