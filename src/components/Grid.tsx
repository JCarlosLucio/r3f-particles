import { animated } from '@react-spring/three';
import { Plane } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { DoubleSide } from 'three';
import { SIDE } from '../utils/contants';
import './GridMaterial';

interface GridProps {
  props?: MeshProps;
}

const Grid = ({ ...props }: GridProps) => {
  return (
    <animated.mesh {...props}>
      <Plane args={[4 * SIDE, 4 * SIDE, 1, 1]}>
        <gridMaterial side={DoubleSide} />
      </Plane>
    </animated.mesh>
  );
};

export default Grid;
