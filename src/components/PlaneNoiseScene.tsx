import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const PlaneNoiseScene = () => {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <color attach="background" args={['#111972']} />
      <pointLight position={[-20, 10, 25]} intensity={0.5} />

      <PerspectiveCamera makeDefault fov={75} position={[8, 5, 40]} />
      <OrbitControls autoRotate autoRotateSpeed={3} />
    </Canvas>
  );
};

export default PlaneNoiseScene;
