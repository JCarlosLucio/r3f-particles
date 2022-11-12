import { useEffect, useState } from 'react';

const STEP_COUNT = 4;

export function useCDDState() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setStep((state) => (state + 1) % STEP_COUNT),
      3000,
    );
    return () => clearTimeout(t);
  }, []);

  return step;
}
