import { useSpring, animated } from 'react-spring';
import CreativePanel from '../CreativePanel/CreativePanel';

function PgLayout(props) {
  const { title, panels } = props.pgInfo;
  const animProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.2 },
    config: { duration: 550 },
  });

  return (
    <animated.div className="pg-panel" style={animProps}>
      <h2>{title}</h2>
      {panels != null &&
        panels.map((panelData) => {
          return <CreativePanel />;
        })}
    </animated.div>
  );
}

export default PgLayout;
