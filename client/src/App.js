import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './pages/common/components/Navbar';
import { Home } from './pages/Home';

import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';



function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route exact path="/" component={Home}/>

    </Router>
  );
}

export default App;
