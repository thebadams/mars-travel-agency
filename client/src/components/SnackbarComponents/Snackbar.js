import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {useAppStateContext} from '../../utils/GlobalContext'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [state, dispatch] = useAppStateContext()

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      console.log('RESETTING MESSAGES')
      console.log(state)
      dispatch({type: 'RESET_MESSAGES', value: ''})
      return;
    }

    setOpen(false);
  };

  return (
    state.messageContainer ?
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={state.success ? "success" : "error"}>
          {state.message}
        </Alert>
      </Snackbar>
    </div> : null
  );
}