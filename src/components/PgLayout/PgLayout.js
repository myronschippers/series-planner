import { useSpring, animated } from 'react-spring';

function PgLayout(props) {
  const { title } = props.pgInfo;
  const animProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.2 },
    config: { duration: 550 },
  });

  return (
    <animated.div className="pg-panel" style={animProps}>
      <h2>{title}</h2>
    </animated.div>
  );
}

export default PgLayout;
