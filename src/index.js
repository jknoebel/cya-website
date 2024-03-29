import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Calendar from './Calendar'; 
import CoreTeam from './core_team';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/events" component={Calendar} />
            <Route path="/core-team" component={CoreTeam} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
