import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { useControls } from "leva";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

export const Experience = (props) => {
  const { viewport } = useThree();
  const { section } = props;

  return (
    <>
      <Sky />
      <Environment preset="sunset" />
      <motion.group
        animate={{
          y: section === 0 ? 0 : 0.1,
        }}
      >
        <Office section={section} />
        <group
          name="typing"
          position={[0.4, -0.2, 1.6]}
          rotation={[Math.PI, -0.084, Math.PI]}
          scale={[1, 1.199, 1]}
        >
          <Avatar animation={section === 0 ? "Falling" : "Typing"} />
        </group>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[1, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh scale={[4, 4, 4]} position={[1, -5.5, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="teal"
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[1, -3, -15]} scale={[1, 3, 3]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={4}
              color="#00B3B3"
            />
          </mesh>
        </Float>
      </motion.group>
    </>
  );
};
