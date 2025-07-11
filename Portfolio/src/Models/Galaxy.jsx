
import React, { useRef } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import galaxyScene from '../assets/3d/galaxy.glb';

const Galaxy = ({ isRotating }) => {
  const galaxyRef = useRef();
  const { scene } = useGLTF(galaxyScene);

  useFrame((_, delta) => {
    if (isRotating && galaxyRef.current) {
      galaxyRef.current.rotation.y += 0.02 * delta;
    }
  });
  

  return (
    <>
      <primitive
        ref={galaxyRef}
        object={scene}
        scale={[20, 20, 20]}   
        position={[-4,0.2,0.2]}  
      />
      <OrbitControls enableZoom={false} /> 
    </>
  );
};

export default Galaxy;
