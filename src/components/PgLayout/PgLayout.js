import { useSpring, animated } from 'react-spring';

function PgLayout(props) {
  const { title } = props.pgInfo;
  const animProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="pg-panel" style={animProps}>
      <h2>{title}</h2>
    </div>
  );
}

export default PgLayout;
