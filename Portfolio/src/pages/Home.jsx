import { Canvas } from '@react-three/fiber';
import { useState,Suspense } from 'react';
import Loader from '../components/Loader';
import Planet from '../Models/Planet';
import Galaxy from '../Models/Galaxy';
import Astro from '../Models/Astro';
import Satellite from '../Models/Satellite';
import HomeInfo from '../components/HomeInfo';




const Home = () => {
  const [isRotating, setIsRotating]=useState(false);
  const [currentStage,setCurrentStage]=useState(1)
  const adjustPlanetForScreenSize = () => {
    let screenScale=null;
    let screenPosition=[0,-6.5,-40];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
  
      screenScale = [5.5, 5.5, 5.5];
      screenPosition = [0, -1.5, -15];
    } else {
  
      screenScale = [7.5, 7.5, 7.5];
      screenPosition = [0, -3, -14];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustAstroForScreenSize = () => {
    let screenScale,screenPosition;
    

    if (window.innerWidth < 768) {
  
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, -0];
    } else {
  
      screenScale = [1, 1, 1];
      screenPosition = [0,-1, -8];
    }

    return [screenScale, screenPosition];
  };


  const [planetScale, planetPosition, planetRotation] = adjustPlanetForScreenSize();
  const [astroScale, astroPosition] = adjustAstroForScreenSize();
  
  

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing':'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000, fov:70}} >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.1}/>
          <directionalLight intensity={0.01} position={[18, 2, 1]} />
          <pointLight intensity={0.3}/>
          <spotLight intensity={0.01}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
        
          
          <Satellite></Satellite>
          <Planet
            position={planetPosition}
            scale={planetScale}
            rotation={planetRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Galaxy isRotating={isRotating}></Galaxy>
          <Astro>
            isRotating={isRotating}
            astroScale={astroScale}
            astroPosition={astroPosition}
            rotation={[0,20,0]}
          </Astro>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
