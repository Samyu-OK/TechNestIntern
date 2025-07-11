import { useRef, useEffect, useState } from 'react';
import astroScene from '../assets/3d/astro.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const Astro = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(astroScene);
  const { actions } = useAnimations(animations, ref);
  const { camera } = useThree();

  const [position, setPosition] = useState({ x: -10, y: -2 });
  const [direction, setDirection] = useState({ x: 1, y: 0.3 });
  const speed = 1;

  useEffect(() => {
    const action = actions['Take 001'];
    if (action) {
      isRotating ? action.play() : action.stop();
    }
  }, [actions, isRotating]);

  const getRandomDirection = () => {
    const x = Math.random() * 1 + 0.5;
    const y = Math.random() * 1 - 0.5;
    return { x, y };
  };

  const getOppositeStart = () => {
    return {
      x: -12,
      y: Math.random() * 8 - 4,
      direction: getRandomDirection(),
    };
  };

  useFrame(() => {
    if (!ref.current) return;


    const newX = position.x + direction.x * speed * 0.05;
    const newY = position.y + direction.y * speed * 0.05;
    const z = -5;
    ref.current.position.set(newX, newY, z);

    ref.current.lookAt(camera.position);

    
    ref.current.rotation.x += Math.PI / 2;

  
    if (newX > 15 || newX < -15 || newY > 10 || newY < -10) {
      const reset = getOppositeStart();
      setPosition({ x: reset.x, y: reset.y });
      setDirection(reset.direction);
    } else {
      setPosition({ x: newX, y: newY });
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[1,1,1]}
      {...props}
    />
  );
};

export default Astro;
