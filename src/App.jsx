import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 6], fov: 40 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
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
