import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHouseUser } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux';
import { setViewerToken } from '../../Viewer';
import Save from '../../Home/saveRecipe';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
    <div className="nav">
      {/* <AppBar position="static"> */}
      <Toolbar>
      <Button

        to="/"
        component={Link}
      >
          <FontAwesomeIcon icon={faHouseUser} style={{ fontSize: "25px" }}/>
          </Button>
      <Button

        component={Link}
        to='/home'
        color="inherit">
       <FontAwesomeIcon icon={faSearch} style={{ fontSize: "25px" }} />
          </Button>
      {
        token ?
          <Button

            color='inherit'
            onClick={handleSignOut}
          >
            Sign Out
              </Button> :
          <div className="sign">
            <Button
              className="sign"
              to='/signup'
              component={Link}
              color="inherit">
              Sign Up
                </Button>
            <Button
              to='/signin'
              component={Link}
              color="inherit">
              Sign In
                </Button>

            <Button
              to='../Home/saveRecipe'
              component = {Link}>
              <i class="fas fa-heart"></i>
            </Button> 
         
            
          </div>
      }

      </Toolbar>
      {/* </AppBar> */}
    </div>
  );
};
