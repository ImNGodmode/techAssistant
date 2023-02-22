import '../App.css';
import React, { useState } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
// import Navbar from "./Navbar";
import { getUser } from "../utilities/users-service";
import HomePage from '../pages/HomePage';
import GuestPage from '../pages/GuestPage';
import AuthPage from '../pages/AuthPage';


 function App() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  console.log(user)

  return (
  <div>
    {user ? (
    <>
    {navigate('/home')}
      <Routes>
        <Route path='/home' element={<HomePage setUser={setUser}/>} />
      </Routes>
      
        
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
