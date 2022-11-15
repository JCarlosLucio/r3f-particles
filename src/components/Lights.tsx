import { SIDE } from '../utils/contants';

const Lights = () => {
  return (
    <>
      {/* <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight position={[1000, 0, 0]} intensity={1} />
      <pointLight position={[2, 3, 4]} intensity={0.1} color="white" /> */}

      <ambientLight intensity={0.8} />
      <spotLight
        intensity={5}
        position={[-10 * SIDE, 0, 2.5 * SIDE]}
        angle={Math.PI / 7}
      />
    </>
  );
};

export default Lights;
