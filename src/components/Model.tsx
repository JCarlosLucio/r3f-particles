import { useGLTF } from '@react-three/drei';

interface ModelProps {
  modelPath?: string;
  scale?: number;
}

const Model = ({
  modelPath = '/ritchie_chair.gltf',
  scale = 1,
}: ModelProps) => {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} dispose={null} scale={scale} />;
};

export default Model;
