import { useCallback, useEffect, useState } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  const handleMouseMove = useCallback(
    (e: MouseEvent) =>
      setMousePosition({
        left: e.pageX,
        top: e.pageY,
      }),
    [],
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [mousePosition];
};

export default useMousePosition;
