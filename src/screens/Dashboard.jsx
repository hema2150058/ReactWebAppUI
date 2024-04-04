import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Dashboard.css'; // Import your CSS file
import Home from './Home/Home';

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate('/')
    }
  }, [navigate])
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'logout') {
      localStorage.clear();
      navigate('/');
    }
  };

  const pStyle = {
    fontSize: '2.5rem',
    fontFamily: "calibri",
    marginLeft: "8rem"
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <p style={{ fontSize: '2rem', fontFamily: "calibri", paddingLeft: "2rem" }}>Inspira</p>
        <nav className="tab-navigation">
          <ul>
            <li className={activeTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}>Home</li>
            <li className={activeTab === 'help' ? 'active' : ''} onClick={() => handleTabClick('help')}>Help & Support</li>
            <li className={activeTab === 'account' ? 'active' : ''} onClick={() => handleTabClick('account')}>Profile</li>
            <li onClick={() => handleTabClick('logout')}>Logout</li>
          </ul>
        </nav>
      </header>
      <div className="dashboard-content">

        <div className="tab-content">
          {activeTab === 'home' && <Home />}
          {activeTab === 'help' && <p style={pStyle}>Help & Support Content</p>}
          {activeTab === 'account' && <p style={pStyle}>Account Settings Content</p>}
          {activeTab === 'logout' && <p style={pStyle}>Logout Content</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;