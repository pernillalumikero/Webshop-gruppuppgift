import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Nav = ({handleCartClick}) => {
  return (
    <Navigation>
      <Link to="/"><img id="logo" src="../src/assets/flwrpwr.png" alt="logotype"/></Link>
      <Link to="/">Home</Link>
      <Link to="#">About</Link>
      <Link to="#">Contact</Link>
      <div>
        <Link to="/admin"><img id="user" src="../src/assets/user.png" alt="Admin log in"/></Link>
        <Link to="/admin">Admin</Link>
        <button onClick={handleCartClick}><img src="../src/assets/shopping.png" alt="Shopping bag"/></button>
      </div>
    </Navigation>
  )
}

const Navigation = styled.nav`
  padding: 20px 50px;
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  align-items: center;

  
    img {
      height: 40px;
    }
  

  section {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: white;
  }
  div {
    display: flex;
    flex-flow: row nowrap;
    gap: 30px;
    margin: 0 0 0 auto;
  }

  a {

    color: black;
    text-transform: uppercase;
    font-family: jost;
    text-decoration: none;
      #user {
        height: 25px;
        position: absolute;
      }
  }

  button {
    all: unset;
    cursor: pointer;
    img {
        height: 20px;
      }
  }
 
`

export default Nav