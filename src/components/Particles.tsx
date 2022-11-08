import { PointMaterial } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Points, TextureLoader } from 'three';
import useMousePosition from '../hooks/useMousePosition';

interface ParticlesProps {
  path?: string;
  color?: string;
  rotationModifier?: number;
}

const Particles = ({
  path = '/cross.png',
  color = 'red',
  rotationModifier = 1,
}: ParticlesProps) => {
  const ref = useRef<Points>(null);

  const crossMap = useLoader(TextureLoader, path);

  const [{ left: mouseX, top: mouseY }] = useMousePosition();

  const particles = 5000;
  const posArray = new Float32Array(particles * 3).map(
    () => (Math.random() - 0.5) * 4,
  );

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0001 * rotationModifier;
    ref.current.rotation.x += 0.0001 * rotationModifier;

    if (mouseX !== 0) {
      const x = mouseX - window.innerWidth / 2;
      const y = mouseY - window.innerHeight / 2;
      ref.current.rotation.y += x * 0.000001 * rotationModifier;
      ref.current.rotation.x += y * 0.000001 * rotationModifier;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={posArray}
          count={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        size={0.005}
        map={crossMap}
        transparent={true}
        color={color}
      />
    </points>
  );
};

export default Particles;
