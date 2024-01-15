import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import Interface from "./components/Interface";
import { MotionConfig } from "framer-motion";
import { useState } from "react";
import { Leva } from "leva";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import { framerMotionConfig } from "./config.js";

function App() {
  const [section, setSection] = useState(0);
  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      ></MotionConfig>
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 32 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu onSectionChange={setSection} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      ></MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
/*
import { BrowserRouter } from "react-router-dom";

import WorkExperience from "../src/components/WorkExperience";
import Navbar from "./components/Navbar";
import Hero from "../src/components/Hero";
import Works from "../src/components/Works";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
        <WorkExperience />

        <Works />
      </div>
    </BrowserRouter>
  );
};

export default App;*/
