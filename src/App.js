import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './screens/Authentication/Login.jsx';
import CreateProfile from './screens/Authentication/CreateProfile.jsx';
import AccountDetails from './screens/AccountDetails';
import Profile from './screens/Profile';
import Home from './screens/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/createProfile' Component={CreateProfile} />
        <Route path='/profile' Component={Profile} />
        <Route path='/accountDetails' Component={AccountDetails} />
      </Routes>
    </Router>
  );
}

export default App;
