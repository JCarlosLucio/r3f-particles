import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Block from './Block';

const BlocksScene = () => {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <color attach="background" args={['#111972']} />
      <pointLight position={[-20, 10, 25]} intensity={0.5} />
      <Center>
        <Block />
      </Center>
      <gridHelper
        args={[100, 20, '#4D089A', '#4D089A']}
        position={[0, 0, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <PerspectiveCamera makeDefault fov={75} position={[8, 5, 40]} />
      <OrbitControls autoRotate autoRotateSpeed={3} />
    </Canvas>
  );
};

export default BlocksScene;
