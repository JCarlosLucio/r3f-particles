import { PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Points } from 'three';

const Torus = () => {
  const ref = useRef<Points>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
  });

  return (
    <points ref={ref}>
      <torusGeometry args={[0.7, 0.2, 16, 100]} />
      <PointMaterial size={0.005} />
      <PointMaterial size={0.005} />
    </points>
  );
};

export default Torus;
