import { useDispatch } from 'react-redux';

// MATERIAL COMPONENTS
import { Button } from '@material-ui/core';

function Header() {
  const dispatch = useDispatch();

  function clickAddPageHandler(event) {
    dispatch({ type: 'TOGGLE_ADD_PAGE' });
  }

  return (
    <header className="app-topper">
      <h1>Series Planner</h1>
      <Button variant="contained" onClick={clickAddPageHandler}>
        Add Page
      </Button>
    </header>
  );
}

export default Header;
