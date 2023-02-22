import React from 'react'
import { Link } from "react-router-dom"


function LandingPage( {setUser} ) {

  return (
    <>
        <h1>Thanks for comming to visit the Nerdy Neighbor!</h1>
        <p>Making a new technology choice is hard. There are dozens of brands, hundreds of products, and endless technical specs that most people just don't understand. Don't worry the Nerdy Neighbor is here to help. Just tell us what device you are looking for and fill out a quick questionair about how you will be using the device, and Nerdy Neighbor will give recomendations with links to purchase products to fulfill your needs.</p>
        <h4>You can create an account to save your information, preferences and product inquaries to be viewed again later and to speed up future inquaries.</h4>
        <Link to='/login'>Click here to login or Sign up.</Link> <br/>
        <Link to='/guest'>Click here to continue as a guest.</Link>
       
        

    
    </>
    
  )
}

export default LandingPage