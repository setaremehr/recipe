import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from '../common/components/Navbar';
import {Home} from './index';
import Comp from './comp';
import {
    WrappedSignUp,
    WrappedSignIn,
} from '../../pages/Viewer';

import MainPage from '../../pages/mainPage/mainPage';



const Router = () => (
    <BrowserRouter>
        {/* <Switch> */}
        <Navbar />
        <Route path='/signup' component={WrappedSignUp} /> 
         <Route path='/signin' component={WrappedSignIn} />
        <Route path='/home' component={Home} exact />
        <Route path='/comp/:id' component={Comp} exact />
        <Route exact path="/" component={MainPage}/>
        {/* </Switch> */}

    </BrowserRouter>
)
export default Router;