import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Suspense } from 'react';
import Lights from './Lights';
import Particles from './Particles';
import Torus from './Torus';

const ParticlesScene = () => {
  return (
    <Canvas>
      <Lights />
      <Suspense fallback={null}>
        <Torus />
        <Particles />
        <Particles path="/circle.png" color="white" rotationModifier={0.5} />
      </Suspense>
      <color attach="background" args={['#000']} />
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 2]} />
      <OrbitControls />
    </Canvas>
  );
};

export default ParticlesScene;
