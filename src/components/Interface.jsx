import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { getImageUrl } from "../utils/image";

const Section = (props) => {
  const { children } = props;

  return (
    <section
      className={`
   h-screen w-screen  max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
    >
      {children}
    </section>
  );
};

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </div>
  );
};

export default Interface;

const AboutSection = () => {
  return (
    <Section className={`relative w-full h-screen mx-auto p-8`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto  flex flex-col items-start gap-5`}
      >
        <h1 className="text-5xl  text-gray-600 font-bold leading-snug ">
          Hi, I'm
          <br />
          <span>Domonique Eccleston</span>
        </h1>
        <motion.p
          className="text-lg text-gray-600 font-400  mt-5"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          I'm a Jamaican front-end developer with expertise
          <br />
          in ReactJS and Tailwind CSS.
          <br />
          <br />
          Aspiring to become a full-stack developer.
        </motion.p>
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "HTML",
    imageSrc: "skills/html.png",
  },
  {
    title: "CSS",
    imageSrc: "skills/css.png",
  },
  {
    title: "Javascript",
    imageSrc: "skills/javascript.png",
  },
  {
    title: "React",
    imageSrc: "skills/reactjs.png",
  },
  {
    title: "Node",
    imageSrc: "skills/nodejs.png",
  },
  {
    title: "ThreeJS",
    imageSrc: "skills/threejs.svg",
  },
  {
    title: "MongoDB",
    imageSrc: "skills/mongodb.png",
  },
  {
    title: "Figma",
    imageSrc: "skills/figma.png",
  },
  {
    title: "Github",
    imageSrc: "skills/git.png",
  },
  {
    title: "Tailwind CSS",
    imageSrc: "skills/tailwind.png",
  },
  {
    title: "Wordpress",
    imageSrc: "skills/wordpress.png",
  },
  {
    title: "Adobe XD",
    imageSrc: "skills/adobe.png",
  },
];

const SkillSection = () => {
  return (
    <Section className="z-0 p-8">
      <motion.div
        whileInView={"visible"}
        className={`max-w-7xl mx-auto items-center justify-center gap-5`}
      >
        <h1 className="text-5xl  text-gray-600 font-bold leading-snug pb-5 ">
          Skills
        </h1>
        <div className="flex-col grid grid-cols-4 gap-y-6 ">
          {skills.map((skill, index) => {
            return (
              <div key={index} className={skill}>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  <img
                    className="mx-auto w-1/3 rounded-full border border-gray-200 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg hover:border-primarydark hover:bg-opacity-50 "
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                  />
                </motion.div>
                <p className="text-center">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

const projects = [
  {
    title: "project1",
    description: "test run 1 ",
    imageSrc: "skills/dolla.gif",
  },
  {
    title: "project2",
    description: "test run 2 ",
    imageSrc: "skills/dolla.gif",
  },
  {
    title: "project3",
    description: "test run 3 ",
    imageSrc: "skills/dolla.gif",
  },
  {
    title: "project4",
    description: "test run 4 ",
    imageSrc: "skills/dolla.gif",
  },
];

const ProjectSection = () => {
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className={` w-full h-full mx-auto items-center justify-center gap-5`}
      >
        <div className="flex-col grid grid-cols-2  h-full w-full">
          {projects.map((project, index) => {
            return (
              <div key={index} className={project}>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                  className="justify-center items-center max-h-[250px] border border-gray-200  "
                >
                  <img
                    className="max-h-[500px]  w-full object-cover rounded-xl"
                    src={getImageUrl(project.imageSrc)}
                    alt="/"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};
