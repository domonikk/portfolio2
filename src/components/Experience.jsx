import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Bored", "Falling"],
    },
  });
  return (
    <>
      <Sky />
      <Environment preset="sunset" />
      <group position={[1.5, 1, 1]}>
        <Office />
      </group>
      <group
        name="typing"
        position={[0.95, -0.2, 1.5]}
        rotation={[Math.PI, -0.084, Math.PI]}
        scale={[1, 1.199, 1]}
      >
        <Avatar animation={animation} />
      </group>
    </>
  );
};
