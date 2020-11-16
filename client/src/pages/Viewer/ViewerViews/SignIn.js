import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { setViewerToken } from '../ViewerReducer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Card from 'react-bootstrap/Card'
// The Field components job is to render out input html
// and pass down functions for updating the state
// as well as check to see if the values being passed are valid
// and it will do this by passing down props to the component they render
// nombre de usuario
// gebruiksnaam
// const TextFieldInput = ({ input, meta, label }) => {
//   console.log(meta);
//   // console.log('FIELD COMPONENT PROPS', props);
//   return <TextField
//     {...input}
//     label={ language === 'Dutch' ? 'gebruiksnaam':'nombre de usuario'}
//     // label={label}
//   />;
// };

const TextFieldInput = ({ input, meta, label }) => {
  // console.log('FIELD COMPONENT PROPS', props);
  return <TextField
    {...input}
    label={label}
  />;
};

// What Redux form does for us
// It will write the functions for updating form state
// It will also write state to determine the current state of each field
// It also gives us a function for getting the values out of the input
// and then putting it in out submit function

//what handleSubmit will do is pass the forms Values as the first parameter
// handleSubmit also preventsDefault for us right away
// to the function that it's calling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // boxShadow: '20 20 20 black',
    margin: theme.spacing(0),
    width: '40ch',
    height: '30ch',
    marginTop: '25ch',
    marginLeft: '63ch',
    marginRight: '50ch',
    margin: 0,
    border: 15,
    color: 'black',
    // boxShadow: '20px 10px 10px 2px rgba(255, 105, 135, .3)',

  },
  details: {

    display: 'flex',
    flexDirection: 'column',
    // width: '50ch',
    // height: '50ch',
  },
  content: {

    alignItems: 'center',
    borderRadius: '1rem',
    borderColor: 'black',
    border: '20rem',
    flex: '1 0 auto',
  },
  cover: {
    // width: 151,
  },
  controls: {
    display: 'flex',
    // alignItems: 'center',
    paddingLeft: theme.spacing(13),
    paddingBottom: theme.spacing(9),

  },
}));
const SignIn = (props) => {
  const classes = useStyles();
  const { handleSubmit, history } = props;

  console.log(props);
  const handleSignIn = async (formValues, dispatch) => {
    console.log(formValues);
    //{ username: 'Your enterereduseRName', password: 'your password' }
    try {
      const res = await axios.post('/auth/signin', formValues);
      localStorage.setItem('token', res.data);
      dispatch(setViewerToken(res.data));
      history.push('/users');
    } catch (e) {
      throw new Error(e);
    }
  }


  return (

   

    <Card className={classes.root} >
      <div className="signIn">
        <form noValidate autoComplete="on" className={classes.details} >
          <CardContent className={classes.content}>

            <Field
              className={classes.field}
              name='username'
              label='username'
              component={TextFieldInput}
            />
            <Field
              name='password'
              label='password'
              component={TextFieldInput}
            />
          </CardContent>
          <div className={classes.controls}>
            <Button
              onClick={handleSubmit(handleSignIn)}
              variant="outlined"
              color="primary">
              Sign in
      </Button>
          </div>

        </form>
      </div>
    </Card>

   
  );
};

export const WrappedSignIn = reduxForm({ form: 'signInForm' })(SignIn);
