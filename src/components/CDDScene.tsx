import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ReactNode } from 'react';
import Lights from './Lights';

interface CDDSceneProps {
  children: ReactNode;
}

const CDDScene = ({ children }: CDDSceneProps) => {
  return (
    <Canvas>
      <color attach="background" args={['#111972']} />
      {children}
      <OrthographicCamera makeDefault position={[-30, 30, 30]} zoom={10} />
      <Lights />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default CDDScene;
