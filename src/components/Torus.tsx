import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const Torus = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.7, 0.2, 16, 100]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default Torus;
