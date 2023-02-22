// IMPORT REACT
import React, { useState } from "react";
// ADDITIONAL IMPORTS
import { login } from "./../utilities/users-service";

// CREATE COMPONENT
const SignIn = ({ setUser }) => {
  // Create different state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      // Retrieve the logged in user
      const user = await login({ email, password });
      // Add the user to state
      setUser(user.data);
    } catch (error) {
      setError(error.message);
    }
    <navigate to ="/home" replace={true} />
  };

  return (
    
      
   <>
      <h4> Have an Account? </h4>
     <div className="form-container">
        <form
            autoComplete="off"
            onSubmit={(e) => {
              return handleFormSubmission(e);  
            }}
            >
                <label>Email</label>
                <input 
                type='email'
                name='email'
                onChange={(e) =>{
                    return handleInputChange(e);
                }}
                value={email}
                required
                />
                <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            return handleInputChange(e);
          }}
          value={password}
          required
        />
        <button type="submit">
          SIGN IN
        </button>
            </form>
     </div>
     <p className="error-message">&nbsp;{error}</p>
    </>
  )};

// EXPORT COMPONENT
export default SignIn;