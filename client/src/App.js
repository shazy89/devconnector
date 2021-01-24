import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import './App.css';

const App = () => {
  return (
    <Router>
        <Fragment>
           <Navbar />
           <Switch>
            <Route exact path='/' component={Landing} />
           </Switch>
        </Fragment>
    </Router>
  );
}

export default App;
