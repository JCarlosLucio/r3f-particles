import { PointMaterial } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Points, TextureLoader } from 'three';
import useMousePosition from '../hooks/useMousePosition';

interface ParticlesProps {
  path?: string;
  color?: string;
}

const Particles = ({ path = '/cross.png', color = 'red' }: ParticlesProps) => {
  const ref = useRef<Points>(null);

  const crossMap = useLoader(TextureLoader, path);

  const [{ left: mouseX, top: mouseY }] = useMousePosition();

  const particles = 5000;
  const posArray = new Float32Array(particles * 3).map(
    () => (Math.random() - 0.5) * 4,
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const elapsedTime = clock.getElapsedTime();

    ref.current.rotation.y = -elapsedTime * 0.008;
    ref.current.rotation.x = elapsedTime * 0.008;

    if (mouseX > 0) {
      ref.current.rotation.y = -mouseX * elapsedTime * 0.000008;
      ref.current.rotation.x = mouseY * elapsedTime * 0.000008;
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
