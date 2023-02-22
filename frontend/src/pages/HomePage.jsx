import React from 'react'
import { Link } from "react-router-dom"
import * as userService from "./../utilities/users-service";

function HomePage({setUser}) {

    const handleLogOut = () => {
    // Call the logout function
    userService.logOut();

    // Set the user back to null
    setUser(null);
    }

  return (
    <>
    <div>HomePage</div>
   
    <Link onClick={() => {
            return handleLogOut();
          }} > Log Out
          </Link>
    </>
    
  )
};

export default HomePage