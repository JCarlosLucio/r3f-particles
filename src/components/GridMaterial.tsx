import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { Color, Side } from 'three';
import { gradientShader, vertexShader } from '../utils/shader';

type GridMaterialImpl = {
  side: Side;
} & JSX.IntrinsicElements['shaderMaterial'];

// Add <gridMaterial /> to JSX.IntrinsicElements
// could have given gridMaterial any name (ex. <myMaterial/>)
// https://docs.pmnd.rs/react-three-fiber/tutorials/typescript#extending-jsx-intrinsic-elements
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
    blue: new Color('#00ffff'),
    green: new Color('#cfff58'),
  },
  vertexShader,
  gradientShader,
);

extend({ GridMaterial });
