import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import Interface from "./components/Interface";
import WorkExperience from "./components/WorkExperience";
import { useState } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";

function App() {
  const [section, setSection] = useState(0);
  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 32 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Interface />
            <WorkExperience />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu onSectionChange={setSection} />
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
