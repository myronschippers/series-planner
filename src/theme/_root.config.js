import { createMuiTheme } from '@material-ui/core/styles';
import * as overrides from './overrides/_root.overrides';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  overrides,
});

export { theme };
