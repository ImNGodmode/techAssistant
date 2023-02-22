import '../App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
// import Navbar from "./Navbar";
import { getUser } from "../utilities/users-service";
//import HomePage from '../pages/HomePage';
import GuestPage from '../pages/GuestPage';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';

 function App() {
  const [user, setUser] = useState(getUser());
  console.log(user)

  return (
  <div>
    {user ? (
    <>
        <HomePage setUser={setUser}/>
    </>
    ) : (
        <Routes>
            <Route path='/*' element={<LandingPage setUser={setUser}/>}/>
            <Route path="/guest" element={<GuestPage/>}/>
            <Route path="/login" element={<AuthPage setUser={setUser}/>}/>
        </Routes>
    )}
    

  
    </div>
  );
}


export default App;
