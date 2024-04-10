import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Login from './screens/Authentication/Login.jsx';
import Dashboard from './screens/Dashboard.jsx';
// import CreateProfile from './screens/text.jsx';
import CreateProfile from './screens/Authentication/CreateProfile.jsx';
import FormExample from './screens/text2.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='/createProfile' Component={CreateProfile}/>
        <Route path='/example' Component={FormExample} />
      </Routes>
    </Router>  
  );
}

export default App;
