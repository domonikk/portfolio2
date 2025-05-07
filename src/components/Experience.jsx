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
  
  // Calculate responsive scaling factors based on viewport size
  const isSmallScreen = viewport.width < 5;
  const isMediumScreen = viewport.width >= 5 && viewport.width < 10;
  
  // Responsive scale values
  const mainGroupScale = isSmallScreen ? 0.8 : isMediumScreen ? 0.9 : 1.1;
  const officeScale = isSmallScreen ? 0.5 : isMediumScreen ? 0.6 : 0.7;
  const sphereScale = isSmallScreen ? 3 : isMediumScreen ? 3.5 : 4;
  const smallSphereScale = isSmallScreen ? [0.8, 1.6, 2.4] : isMediumScreen ? [0.9, 1.8, 2.7] : [1, 2, 3];
  
  // Responsive positions
  const mainGroupPosition = {
    x: isSmallScreen ? 1 : isMediumScreen ? 1.5 : 2,
    y: -0.45,
    z: isSmallScreen ? 1 : isMediumScreen ? 1.5 : 2
  };
  
  const officePosition = {
    x: isSmallScreen ? 0.5 : isMediumScreen ? 0.75 : 1,
    y: -0.1,
    z: 0
  };
  
  // Use useEffect to log viewport changes (optional, for debugging)
  useEffect(() => {
    console.log("Viewport width:", viewport.width);
  }, [viewport.width]);

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
          <mesh scale={[sphereScale, sphereScale, sphereScale]} position={[5, -5, -18]}>
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
          <mesh position={[4, -3, -15]} scale={smallSphereScale}>
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
        <group 
          scale={[mainGroupScale, mainGroupScale, mainGroupScale]} 
          position-y={mainGroupPosition.y} 
          position-x={mainGroupPosition.x} 
          position-z={mainGroupPosition.z}
        >
          <Avatar animation={section === 0 ? "Falling" : "Thinking"} />
        </group>
        {/*<Office section={section} />*/}
        <group 
          scale={[officeScale, officeScale, officeScale]} 
          position-y={officePosition.y} 
          position-x={officePosition.x}
          position-z={officePosition.z}
        >
          <Office/>
        </group>
      </motion.group>
    </>
  );
};