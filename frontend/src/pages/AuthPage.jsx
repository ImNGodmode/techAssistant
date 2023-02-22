import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignIn from '../components/SignIn'
function AuthPage({ setUser }) {
  return (
    <div>
      <h1>User log in and sign up </h1>
      <SignUpForm setUser={setUser} />
      <br />
      <SignIn setUser={setUser} />
    </div>
  )
}

export default AuthPage