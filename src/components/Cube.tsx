import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const Cube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((_state, _delta) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Cube;
