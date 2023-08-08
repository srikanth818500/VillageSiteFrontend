import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './component/SignUp';
import './App.css';
import LoginUser from './component/LoginUser';
import UserDashboard from './component/UserDashboard';
import Header from './component/Header';
import Places from './component/Places';
import { CreateMatch } from './component/CreateMatch';

function App() {
  const phoneNumber=sessionStorage.getItem('loggeduser');
  const userLoggedIn=!!phoneNumber;
  return (
    <div className="App">
     {userLoggedIn && <Header />}
      {/* Wrap the entire application with the UserContextProvider */}
     
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userpage" element={<UserDashboard />} />
          <Route path="/places" element={<Places />} />
          <Route path="/creatematch" element={<CreateMatch />} />
        </Routes>
  
    </div>
  );
}

export default App;
