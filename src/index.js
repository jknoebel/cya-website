import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Calendar from './Calendar'; 
import Event from './Event'


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/events" component={Calendar} />
            <Route path="/events/:event_id" component={Event} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
