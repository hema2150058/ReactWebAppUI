import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Login from './screens/Authentication/Login.jsx';
import Dashboard from './screens/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
    </Router>  
  );
}

export default App;
