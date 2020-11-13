import React, { useEffect } from 'react';
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
import { setViewerLikes } from "../../Viewer/ViewerReducer";
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
  const { token, likes } = useSelector(state => state.viewer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (likes.length > 0) {
      return
    } 
    const fetchData = async () => {
      const result = await fetch("/api/likes", { method: "get", headers: { "content-type": "application/json" } })
      dispatch(setViewerLikes(await result.json()))
    }
    fetchData()
  },[likes]) 
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
          <Button
              to='../Home/saveRecipe'
              component = {Link}
              color="inherit">
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "25px" }} />
              {/* <i class="fas fa-heart"></i> */}
              { likes.length }
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
            
          </div>
      }

      </Toolbar>
      {/* </AppBar> */}
    </div>
  );
};
