import { useTransition, animated } from '@react-spring/web';

const labels = ['Atomic components', 'Composite components', 'Pages', 'Apps'];

interface LabelProps {
  step?: number;
}

const Label = ({ step = 0 }: LabelProps) => {
  const transition = useTransition(step, {
    from: { opacity: 0, transform: 'translate3d(0, -48px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 24px, 0)' },
  });

  return (
    <div className="container">
      {transition((style, step) => (
        <animated.div className="box" style={style}>
          <div className="text">{labels[step]}</div>
        </animated.div>
      ))}
    </div>
  );
};

export default Label;
