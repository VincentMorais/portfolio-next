import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";
import { SpotLightHelper } from 'three';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <>
      <primitive
        object={earth.scene}
        scale={1}
        position-y={0}
        rotation-y={0}
      />
      <ambientLight intensity={0.5} />
    </>
  )
};

const MovingLight = ({ spotLightRef }) => {
  useFrame(({ clock }) => {
    if (spotLightRef.current) {
      const light = spotLightRef.current;
      light.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 10;
    }
  });
  return null;
}

const EarthCanvas = () => {
  const spotLightRef = useRef();
  const [helper, setHelper] = useState();

  useEffect(() => {
    if (spotLightRef.current) {
      const light = spotLightRef.current;
      const color = 0xffffff;
      const newHelper = new SpotLightHelper(light, color);
      setHelper(newHelper);
    }
  }, [spotLightRef.current]);

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <spotLight
          ref={spotLightRef}
          position={[-4, 3, 6]}
          angle={Math.PI / 4}
          penumbra={0.5}
          intensity={4}
          castShadow
        />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MovingLight spotLightRef={spotLightRef} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;


