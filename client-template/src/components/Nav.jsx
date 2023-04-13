import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="#">About</Link>
      <Link to="#">Contact</Link>
      <Link to="/admin"><img id="user" src="../src/assets/user.png" alt="Admin log in"/></Link>
      <Link to="/admin">Admin</Link>
      <Link to="#"><img src="../src/assets/shopping.png" alt="Shopping bag"/></Link>

    </Navigation>
  )
}

const Navigation = styled.nav`
  padding: 20px;

  a {
    padding: 30px;
    color: black;
    text-transform: uppercase;
    font-family: jost;
    text-decoration: none;
      img {
        height: 20px;
      }
      #user {
        height: 25px;
        position: absolute;
      }
  }
`

export default Nav