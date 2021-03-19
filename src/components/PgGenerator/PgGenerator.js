import { useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import PgLayoutList from '../PgLayoutList/PgLayoutList';

function PgGenerator() {
  const pgCollection = useSelector((store) => store.pgCollection);

  return (
    <div>
      <PgLayoutList list={pgCollection} />
    </div>
  );
}

export default PgGenerator;
