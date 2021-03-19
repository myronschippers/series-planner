import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// CUSTOM COMPONENTS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PgGenerator from './components/PgGenerator/PgGenerator';
import AddPgLayout from './components/AddPgLayout/AddPgLayout';

// THEME CONFIGURATION
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/_root.config';

function App() {
  const isAddPageOpen = useSelector((store) => store.isAddPageOpen);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch({ type: 'CLOSE_ADD_PAGE' });
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />

        <main>
          <PgGenerator />
        </main>

        <Footer />
      </div>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={isAddPageOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        <DialogTitle>Add New Page Layout</DialogTitle>
        <DialogContent>
          <AddPgLayout />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
