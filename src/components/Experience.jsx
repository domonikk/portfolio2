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
          y: section === 0,
        }}
      >
        <Float>
          <mesh scale={[4, 4, 4]} position={[5, -5, -18]}>
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
          <mesh position={[4, -3, -15]} scale={[1, 2, 3]}>
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
        <group scale={[1.1, 1.1, 1.1]} position-y={-0.45} position-x={2} position-z={2}>
          <Avatar animation={section === 0 ? "Falling" : "Thinking"} />
        </group>
        {/*<Office section={section} />*/} 
        <group scale={[0.7, 0.7,  0.7]} position-y={-.1} position-x={1}>
          <Office/>
        </group>
      </motion.group>
    </>
  );
};
