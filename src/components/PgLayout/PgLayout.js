function PgLayout(props) {
  const { title } = props.pgInfo;

  return (
    <div className="pg-panel">
      <h2>{title}</h2>
    </div>
  );
}

export default PgLayout;
