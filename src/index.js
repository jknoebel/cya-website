import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Calendar from './Calendar'; 
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/events" component={Calendar} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// ReactDOM.render(<Calendar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
