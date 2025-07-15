import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
  Float,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion-3d";

export const Experience = ({ section }) => {
  const { viewport } = useThree();

  // Determine screen size category
  const screen = useMemo(() => {
    const width = viewport.width;
    if (width < 5) return "small";
    if (width < 10) return "medium";
    return "large";
  }, [viewport.width]);

  // Layout configuration based on screen size
  const config = useMemo(() => {
    return {
      mainGroupScale: screen === "small" ? 0.8 : screen === "medium" ? 0.9 : 1.1,
      officeScale: screen === "small" ? 0.8 : screen === "medium" ? 0.8 : 0.7,
      sphereScale: screen === "small" ? 3 : screen === "medium" ? 3.5 : 4,
      smallSphereScale:
        screen === "small"
          ? [0.8, 1.6, 2.4]
          : screen === "medium"
          ? [0.9, 1.8, 2.7]
          : [1, 2, 3],
      avatarPosition:
        screen === "small" ? [0, -4, 1.5] : screen === "medium" ? [-1, -4, 1.9] : [1, -0.42, 1.5],
      officePosition:
        screen === "small" ? [-1, -3.5, 0] : screen === "medium" ? [-1.5, -3.5, 0] : [0.8, 0, 0],
    };
  }, [screen]);

  useEffect(() => {
    console.log("Viewport width:", viewport.width, "| Screen:", screen);
  }, [viewport.width, screen]);

  return (
    <>
      <Sky />
      <Environment preset="sunset" />
      <motion.group animate={{ y: section === 0 }}>
        {/* Floating Background Elements */}
        <Float>
          <mesh
            scale={[config.sphereScale, config.sphereScale, config.sphereScale]}
            position={[5, -5, -18]}
          >
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
          <mesh position={[4, -3, -15]} scale={config.smallSphereScale}>
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

        {/* Simulated flex layout */}
        <group scale={[config.mainGroupScale, config.mainGroupScale, config.mainGroupScale]}>
          <group position={config.avatarPosition}>
            <Avatar animation={section === 0 ? "Falling" : "Thinking"} />
          </group>

          <group position={config.officePosition} scale={[config.officeScale, config.officeScale, config.officeScale]}>
            <Office />
          </group>
        </group>
      </motion.group>
    </>
  );
};
