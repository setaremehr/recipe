import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import '../../../App.css';

import {useSelector, useDispatch} from 'react-redux';
import {setViewerToken} from '../../Viewer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { token } = useSelector(state => state.viewer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(setViewerToken(null));
    history.push('/');
  };

  return (
    <div  className="nav">
      {/* <AppBar position="static"> */}
        {/* <Toolbar> */}
          <Button
         
            component={Link}
            to='/'
            color="inherit">
            About
          </Button>
          {
            token ?
              <Button
              
                color='inherit'
                onClick={ handleSignOut}
              >
                Sign Out
              </Button> :
              <div>
                <Button
                className="sign"
                  to='/signup'
                  component={Link}
                  color="inherit">
                  Sign Up
                </Button>
                <Button
                className="sign"
                  to='/signin'
                  component={Link}
                  color="inherit">
                  Sign In
                </Button>
                <h1 className="logo">
                  LOGO
                </h1>
              </div>
          }
        {/* </Toolbar> */}
      {/* </AppBar> */}
    </div>
  );
};
