import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './component/SignUp';
import './App.css';
import LoginUser from './component/LoginUser';
import UserDashboard from './component/UserDashboard';
import Header from './component/Header';
import Places from './component/Places';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Wrap the entire application with the UserContextProvider */}
     
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userpage" element={<UserDashboard />} />
          <Route path="/places" element={<Places />} />
        </Routes>
  
    </div>
  );
}

export default App;
