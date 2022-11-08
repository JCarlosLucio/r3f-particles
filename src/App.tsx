import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Suspense } from 'react';
import Lights from './components/Lights';
import Particles from './components/Particles';
import Torus from './components/Torus';

const App = () => {
  return (
    <>
      <Canvas>
        <Lights />
        <Suspense fallback={null}>
          <Torus />
          <Particles />
          <Particles path="/circle.png" color="white" />
        </Suspense>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 2]} />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;
