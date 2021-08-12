import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $ from 'jquery';

import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/css/body.css';

import Index from './components/pages/Index';
import Dashboard from './components/pages/Dashboard';

function App() {

  return (
    <div className='container-fluid px-0'>
      <Router>
        <Route exact path='/' component={ Index } />
        <Route exact path='/:user' component={ Dashboard } />
      </Router>
    </div>
  );
}

export default App;
