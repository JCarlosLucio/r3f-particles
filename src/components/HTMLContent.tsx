import { MutableRefObject, ReactNode, useRef } from 'react';

import { Mesh } from 'three';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import Model from './Model';

interface HTMLContentProps {
  children: ReactNode;
  domContent: MutableRefObject<HTMLElement> | undefined;
  modelPath: string;
  positionY: number;
  scale: number;
  bgColor: string;
}

const HTMLContent = ({
  children,
  modelPath,
  positionY,
  scale,
}: HTMLContentProps) => {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
  });

  return (
    <group position={[0, positionY, 0]}>
      <mesh ref={ref} position={[0, -35, 0]}>
        <Model modelPath={modelPath} scale={scale} />
      </mesh>
      <Html fullscreen>{children}</Html>
    </group>
  );
};

export default HTMLContent;
