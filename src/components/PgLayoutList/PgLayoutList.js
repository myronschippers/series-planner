import { useSelector } from 'react-redux';

function PgLayoutList(props) {
  const renderList = props.list.map((pgData) => {
    return <div className="pg-panel">{pgData.title}</div>;
  });

  return <div>{renderList}</div>;
}

export default PgLayoutList;
