import { Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { DoubleSide, ShaderMaterial } from 'three';
import './NoiseMaterial';

const PlaneNoise = () => {
  const material = useRef<ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (!material.current) return;

    material.current.uniforms.time.value = Math.sin(
      (2 * Math.PI * clock.getElapsedTime()) / 10,
    );
  });

  return (
    <Plane args={[12, 14.75]}>
      <noiseMaterial ref={material} side={DoubleSide} />
    </Plane>
  );
};

export default PlaneNoise;
