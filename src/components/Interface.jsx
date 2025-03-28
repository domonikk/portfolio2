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
      <ProjectSection/>
      <ContactSection />
    </div>
  );
};

export default Interface;

const AboutSection = () => {
  return (
    <Section className={`relative w-full h-screen mx-auto p-8`}>
      <div
        className={`absolute inset-0 top-[250px] align-middle max-w-7xl mx-auto  flex flex-col  gap-5 `}
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
        
        whileInView="visible"
       
      >
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }
                },
                hidden: { opacity: 0, scale: 0.9 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={getImageUrl(project.imageSrc)}
                  alt={project.title || "Project Image"}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div> 

        <div className="text-center">
                <button
                  
                  className="bg-indigo-600 text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
                >
                  View More 
                </button>
              </div>
      </motion.div>
    </Section>
  );
};


const ContactSection = () => {
  const [state, handleSubmit] = useForm("mayzgjbd");

  return (
    <Section className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Contact me</h2>
        
        <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-10 w-full">
          {state.succeeded ? (
            <p className="text-gray-900 text-center text-2xl font-semibold">
              Thanks for your message!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-lg font-medium text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
                <ValidationError
                  className="mt-2 text-red-500"
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="h-40 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
                <ValidationError
                  className="mt-2 text-red-500"
                  errors={state.errors}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-indigo-600 text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
                >
                  {state.submitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};


