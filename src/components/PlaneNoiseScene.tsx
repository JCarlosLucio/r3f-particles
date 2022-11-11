import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import PlaneNoise from './PlaneNoise';

const PlaneNoiseScene = () => {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <color attach="background" args={['#111972']} />
      <Suspense fallback={null}>
        <Center>
          <PlaneNoise />
        </Center>
      </Suspense>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 10]} />
      <OrbitControls />
    </Canvas>
  );
};

export default PlaneNoiseScene;
