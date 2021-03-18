import { useSelector } from 'react-redux';

function PgLayoutList(props) {
  const renderList = props.list.map((pgData, pgIndex) => {
    return (
      <div className="pg-panel" key={pgIndex}>
        {pgData.title}
      </div>
    );
  });

  return <div>{renderList}</div>;
}

export default PgLayoutList;
