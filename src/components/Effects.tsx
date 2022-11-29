import { Bloom, EffectComposer } from '@react-three/postprocessing';

const Effects = () => {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.5}
        luminanceSmoothing={0.5}
        intensity={1}
        levels={6}
        mipmapBlur
      />
    </EffectComposer>
  );
};

export default Effects;
