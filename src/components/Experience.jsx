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
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <Office />
      <group
        name="typing"
        position={[-0.474, -1.215, 0.409]}
        rotation={[Math.PI, -0.084, Math.PI]}
        scale={[1, 1.199, 1]}
      >
        <Avatar animation={animation} />
      </group>
    </>
  );
};
