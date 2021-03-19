import { useState } from 'react';
import { useDispatch } from 'react-redux';

// CUSTOM COMPONENTS
import Panel from '../Panel/Panel';

// MATERIAL-UI COMPONENTS
import { TextField, Button } from '@material-ui/core';

function AddPgLayout() {
  const [newPage, setNewPage] = useState({
    title: '',
  });
  const dispatch = useDispatch();

  function submitNewPageHandler(event) {
    event.preventDefault();

    console.log('submitNewPageHandler');
    dispatch({
      type: 'ADD_TO_PG_COLLECTION',
      payload: newPage,
    });

    dispatch({ type: 'CLOSE_ADD_PAGE' });

    setNewPage({
      title: '',
    });
  }

  function changeField(fieldKey, event) {
    setNewPage({
      ...newPage,
      [fieldKey]: event.target.value,
    });
  }

  return (
    <form onSubmit={submitNewPageHandler}>
      <TextField
        label="Page Title"
        required
        value={newPage.title}
        onChange={(event) => changeField('title', event)}
      />

      <Button type="submit">Add Page</Button>
    </form>
  );
}

export default AddPgLayout;
