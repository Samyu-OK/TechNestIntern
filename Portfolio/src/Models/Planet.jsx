import { a } from "@react-spring/three";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import purple_planetScene from "../assets/3d/purple_planet.glb";

const Planet = ({ isRotating, setIsRotating, setCurrentStage, setShowPopup, ...props }) => {
  const planetRef = useRef();
  const { nodes, materials } = useGLTF(purple_planetScene);
  const [popupShown, setPopupShown] = useState(false);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.003;

      const rotation = planetRef.current.rotation.y;
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

switch (true) {
  case normalizedRotation >= 0.0 && normalizedRotation < 2.0:
    setCurrentStage(2);
    break;
  case normalizedRotation >= 2.0 && normalizedRotation < 4.0:
    setCurrentStage(3);
    break;
  case normalizedRotation >= 4.0 && normalizedRotation <= 6.3:
    setCurrentStage(1);
    break;
}
    }
  });

  const handleInteraction = () => {
    if (!popupShown) {
      setShowPopup(true);
      setPopupShown(true);
    }
  };

  return (
    <a.group
      ref={planetRef}
      {...props}
      onClick={handleInteraction}
      onPointerOver={handleInteraction}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Planet" rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="Planet_0"
                geometry={nodes.Planet_0.geometry}
                material={materials.PurplePlanet}
              />
              <group name="Clouds_0" rotation={[0, 0, -Math.PI / 2]} scale={1.013}>
                <mesh
                  name="Clouds_0_0"
                  geometry={nodes.Clouds_0_0.geometry}
                  material={materials.Clouds_0}
                />
              </group>
            </group>
            <group name="Clouds_1" scale={1.019}>
              <mesh
                name="Clouds_1_0"
                geometry={nodes.Clouds_1_0.geometry}
                material={materials.Clouds_1}
              />
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Planet;