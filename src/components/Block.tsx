import { Extrude } from '@react-three/drei';
import { useMemo } from 'react';
import { Shape } from 'three';
import { SIDE } from '../utils/contants';

const extrudeSettings = { steps: 2, depth: SIDE, bevelEnabled: false };

const Block = () => {
  const shape = useMemo(() => {
    const _shape = new Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <Extrude args={[shape, extrudeSettings]}>
      <meshPhysicalMaterial
        flatShading
        color="#3E64FF"
        transmission={0.8}
        opacity={0.9}
        clearcoat={1}
        clearcoatRoughness={0.5}
        roughness={0.4}
        thickness={SIDE}
        ior={1.25}
        attenuationColor="#fff"
        attenuationDistance={0.5}
      />
    </Extrude>
  );
};

export default Block;
