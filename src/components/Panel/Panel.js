// MATERIAL-UI COMPONENTS
import { Paper, Box } from '@material-ui/core';

function Panel(props) {
  return (
    <Paper>
      <Box padding={2}>{props.children}</Box>
    </Paper>
  );
}

export default Panel;
