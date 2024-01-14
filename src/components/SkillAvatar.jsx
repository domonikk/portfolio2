import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { useControls } from "leva";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const SkillAvatar = () => {
  const characterContainerAboutref = useRef();
  const { viewport } = useThree();
  const [section, setSection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Thinking");
    }, 600);
  }, [section]);

  return (
    <>
      <Sky />
      <Environment preset="sunset" />
      <group position={[1.5, 1, 1]}>
        <Office />
      </group>
      <group
        ref={characterContainerAboutref}
        name="typing"
        position={[0.95, -0.2, 1.5]}
        rotation={[Math.PI, -0.084, Math.PI]}
        scale={[1, 1.199, 1]}
      >
        <Avatar animation={characterAnimation} />
      </group>
    </>
  );
};

export default SkillAvatar;
