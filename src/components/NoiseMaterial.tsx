import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { Color, Side } from 'three';
import { fragmentShader, vertexShader } from '../utils/shader';

type NoiseMaterialImpl = {
  side: Side;
} & JSX.IntrinsicElements['shaderMaterial'];

// Add <noiseMaterial /> to JSX.IntrinsicElements
// could have given noiseMaterial any name (ex. <myMaterial/>)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      noiseMaterial: NoiseMaterialImpl;
    }
  }
}

const NoiseMaterial = shaderMaterial(
  {
    scale: 1.5,
    size: 0.2,
    density: 4.0,
    time: 0.0,
    bg: new Color('#111033'),
    yellow: new Color('#ffd600'),
    orange: new Color('#ff7300'),
  },
  vertexShader,
  fragmentShader,
);

extend({ NoiseMaterial });
