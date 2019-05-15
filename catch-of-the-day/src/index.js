import React from 'react';
import {render} from 'react-dom'

// REACT ROUTER

import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types';



// Styling
import "./css/style.css"

// Components 

import App from "./components/App"
import StorePicker from "./components/StorePicker"
import NotFound from "./components/NotFound"

const Root = () => {
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path='/' component={StorePicker}/>
            <Route exact path="/store/:storeId" component={App}/>
            <Route component={NotFound}/>
            </Switch>
      </BrowserRouter>


    )
}


render(<Root/>, document.querySelector('#main'))
