import { Center } from '@react-three/drei';
import Block from './components/Block';
import CDDScene from './components/CDDScene';
import Effects from './components/Effects';
import Grid from './components/Grid';
import Label from './components/Label';
import PlaneNoise from './components/PlaneNoise';
import { useCDDState } from './hooks/useCDDState';

const App = () => {
  const cddStep = useCDDState();

  return (
    <>
      <CDDScene>
        <Center>
          <Block />
        </Center>
        <Grid />
        <PlaneNoise />
        <Effects />
      </CDDScene>
      <Label step={cddStep} />
    </>
  );
};

export default App;
