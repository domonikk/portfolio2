import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { getImageUrl } from "../utils/image";
import { ValidationError, useForm } from "@formspree/react";

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
      <ContactSection />
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
    description: "Dolla",
    imageSrc: "skills/dolla.gif",
    url: "https://crypto-react-website.netlify.app/",
  },
  {
    title: "project2",
    description: "Lost in Time ",
    imageSrc: "skills/lost-time.gif",
    url: "",
  },
  {
    title: "project3",
    description: "test run 3 ",
    imageSrc: "skills/dolla.gif",
    url: "",
  },
  {
    title: "project4",
    description: "test run 4 ",
    imageSrc: "skills/dolla.gif",
    url: "",
  },
];

const ProjectSection = () => {
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className={` w-full h-full mx-auto items-center justify-center gap-5`}
        id="default-carousel"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
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
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mayzgjbd");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
