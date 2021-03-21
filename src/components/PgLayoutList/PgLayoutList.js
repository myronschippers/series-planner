import { useSelector } from 'react-redux';

// CUSTOM COMPONENT
import PgLayout from '../PgLayout/PgLayout';

function PgLayoutList(props) {
  const renderList = props.list.map((pgData, pgIndex) => {
    return <PgLayout pgInfo={pgData} key={pgIndex} />;
  });

  return <div className="pg-list">{renderList}</div>;
}

export default PgLayoutList;
