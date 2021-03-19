import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// MATERIAL-UI COMPONENTS
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

function AddPgLayout() {
  const [newPage, setNewPage] = useState({
    title: '',
  });
  const dispatch = useDispatch();
  const isAddPageOpen = useSelector((store) => store.isAddPageOpen);

  function handleClose() {
    dispatch({ type: 'CLOSE_ADD_PAGE' });
  }

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
    <Dialog
      fullWidth
      maxWidth="xs"
      open={isAddPageOpen}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogContent>
        <form className="dialog-tight" onSubmit={submitNewPageHandler}>
          <div className="dialog-tight__block dialog-tight__block--lean-right">
            <IconButton onClick={handleClose} size="small">
              <Close fontSize="small" />
            </IconButton>
          </div>
          <div className="dialog-tight__block">
            <Typography component="h2" variant="h6">
              Add New Page Layout
            </Typography>
          </div>
          <div className="dialog-tight__block">
            <TextField
              label="Page Title"
              required
              value={newPage.title}
              fullWidth
              onChange={(event) => changeField('title', event)}
            />
          </div>
          <div className="dialog-tight__block dialog-tight__block--lean-right">
            <Button type="submit">Add Page</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddPgLayout;
