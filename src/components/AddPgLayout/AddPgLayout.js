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
    <Panel>
      <form onSubmit={submitNewPageHandler}>
        <p>{JSON.stringify(newPage)}</p>

        <TextField
          label="Page Title"
          required
          value={newPage.title}
          onChange={(event) => changeField('title', event)}
        />

        <Button type="submit">Add Page</Button>
      </form>
    </Panel>
  );
}

export default AddPgLayout;
