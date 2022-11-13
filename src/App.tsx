// import BlocksScene from './components/BlocksScene';
// import ParticlesScene from './components/ParticlesScene';
import Label from './components/Label';
import PlaneNoiseScene from './components/PlaneNoiseScene';
import { useCDDState } from './hooks/useCDDState';

const App = () => {
  const cddStep = useCDDState();

  return (
    <>
      {/* <BlocksScene /> */}
      {/* <ParticlesScene /> */}
      <PlaneNoiseScene />
      <Label step={cddStep} />
    </>
  );
};

export default App;
