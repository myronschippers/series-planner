import { useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import PgLayoutList from '../PgLayoutList/PgLayoutList';
import AddPgLayout from '../AddPgLayout/AddPgLayout';

function PgGenerator() {
  const pgCollection = useSelector((store) => store.pgCollection);

  return (
    <div>
      <AddPgLayout />
      <PgLayoutList list={pgCollection} />
    </div>
  );
}

export default PgGenerator;
