import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import satelliteScene from '../assets/3d/satellite.glb';

const Satellite = ({ islandPosition = [0, 0, 0] }) => {
  const satelliteRef = useRef();
  const { scene } = useGLTF(satelliteScene);
  const [angle, setAngle] = useState(0);

  const radius = 15;     
  const heightOffset = 6.5; 
  const speed = 0.01;        

  useFrame(() => {
    const newAngle = angle + speed;
    setAngle(newAngle);

    const [cx, cy, cz] = islandPosition;

    const x = cx + Math.cos(newAngle) * radius;
    const y = cy + heightOffset;
    const z = cz + Math.sin(newAngle) * radius;

    if (satelliteRef.current) {
      satelliteRef.current.position.set(x, y, z);
      satelliteRef.current.lookAt(cx, y, cz); 
    }
  });

  return (
    <primitive
      ref={satelliteRef}
      object={scene}
      scale={[0.05, 0.05, 0.05]}
    />
  );
};

export default Satellite;
