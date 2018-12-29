import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import classes from './App.css';
import ReactPage from './containers/Home/ReactPage';
import asyncComponent from './hoc/asyncComponent';

//Sample lazy loading setup
const Programmer = asyncComponent(() => import('./containers/Programmer/Programmer'));

class App extends Component {
    render () {
        return (
            <div className={classes.App}>
                <nav>
                    <NavLink to="/" exact activeClassName={classes.Active}> Home Page </NavLink>
                    <NavLink to="/programmer" activeClassName={classes.Active}> Programmer Page </NavLink>
                </nav>
                <div>
                    <Route path="/" exact component={ReactPage} />
                    <Route path="/programmer" component={Programmer} />
                </div>
            </div>
        );
    }
}

export default App;