import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { setViewerLikes, setViewerToken } from '../ViewerReducer';
import { CardContent, makeStyles } from '@material-ui/core';
import { Card } from '@material-ui/core/Card'
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
class SignUp extends Component {

  handleSignUp = async (formValues) => {
    console.log(formValues);
    //{ username: 'Your enterereduseRName', password: 'your password' }
    try {
      const res = await axios.post('/auth/signup', formValues);
      console.log('I AM THE SIGNUP USERS TOKEN', res.data);
      localStorage.setItem('token', res.data);
      this.props.setViewerToken(res.data);
      this.props.history.push('/users');
      // sessionStorage.setItem('token', res.data);
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form noValidate autoComplete="off">
        <Field
          name='username'
          label='username'
          component={TextFieldInput}
        />
        <Field
          name='password'
          label='password'
          component={TextFieldInput}
        />
        <Button
          onClick={ handleSubmit(this.handleSignUp) }
          variant="contained"
          color="primary">
          Sign up
        </Button>
      </form>
    );
  }
}

// const SignUp = (props) => {
//   const { handleSubmit, history } = props;
//
//   console.log(props);
//   const handleSignUp = async (formValues) => {
//     console.log(formValues);
//     //{ username: 'Your enterereduseRName', password: 'your password' }
//     try {
//       const res = await axios.post('/auth/signup', formValues);
//       console.log('I AM THE SIGNUP USERS TOKEN', res.data);
//       localStorage.setItem('token', res.data);
//       history.push('/users');
//       // sessionStorage.setItem('token', res.data);
//     } catch (e) {
//       throw new Error(e);
//     }
//   }
//
//   return (
//     <form noValidate autoComplete="off">
//       <Field
//         name='username'
//         label='username'
//         component={TextFieldInput}
//       />
//       <Field
//         name='password'
//         label='password'
//         component={TextFieldInput}
//       />
//       <Button
//         onClick={ handleSubmit(handleSignUp) }
//         variant="contained"
//         color="primary">
//         Sign up
//       </Button>
//     </form>
//   );
// };
function mapStateToProps(state) {
  return { superman: state.viewer };
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '40ch',
    height: '30ch',
    marginTop: '25ch',
    marginLeft: '63ch',
    marginRight: '50ch',
    margin: 0,
    border: 15,
    color: 'black',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    alignItems: 'center',
    borderRadius: '1rem',
    borderColor: 'black',
    border: '20rem',
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    paddingLeft: theme.spacing(13),
    paddingBottom: theme.spacing(9),
  },
}));
const SignUp = (props) => {
  const classes = useStyles();
  const { handleSubmit, history } = props;

  console.log(props);
  const handleSignUp = async (formValues, dispatch) => {
    console.log(formValues);
    try {
      const res = await axios.post('/auth/singin', formValues);
      localStorage.setItem('token', res.data);
      dispatch(setViewerToken(res.data));
      history.push('/users');
    } catch (e) {
      throw new Error (e);
    }
  }

  return (
    <Card className={classes.root} >
      <div className="signUp">
        <form noValidate autoComplete="on" className={classes.details} >
          <CardContent className={classes.conent}>
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
          <div className = {classes.controls}>
            <Button
              onClick={handleSubmit(handleSignUp)}
              variant="outlined"
              color="primary">
                Sign Up
              </Button>
          </div>
        </form>
      </div>
    </Card>
  );
// mapDispatchToProps

// const composedComponent = connect(mapStateToProps, { setUserToken })(SignUp);
//
//
// export const WrappedSignUp = reduxForm({ form: 'signUpForm' })(composedComponent);


// export const WrappedSignUp = reduxForm({ form: 'signUpForm' })(connect(mapStateToProps, { setUserToken })(SignUp));

export const WrappedSignUp = compose(
  reduxForm({ form: 'signUpForm' }),
  connect(mapStateToProps, { setViewerToken })
)(SignUp);
