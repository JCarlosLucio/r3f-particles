import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { Color, Side } from 'three';
import { gradientShader, vertexShader } from '../utils/shader';

type GridMaterialImpl = {
  side: Side;
} & JSX.IntrinsicElements['shaderMaterial'];

// Add <gridMaterial /> to JSX.IntrinsicElements
// could have given gridMaterial any name (ex. <myMaterial/>)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      gridMaterial: GridMaterialImpl;
    }
  }
}

const GridMaterial = shaderMaterial(
  {
    bg: new Color('#111033'),
    yellow: new Color('#ffd600'),
    orange: new Color('#ff7300'),
    pink: new Color('#ff4685'),
    purple: new Color('#6e2cac'),
    blue: new Color('#00ffff'),
    green: new Color('#cfff58'),
  },
  vertexShader,
  gradientShader,
);

extend({ GridMaterial });
