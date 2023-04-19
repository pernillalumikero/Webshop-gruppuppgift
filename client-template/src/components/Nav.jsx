import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'



const Nav = ({handleCartClick, cart}) => {

  const [quantity, setQuantity] = useState(0)
  const displayQuantity = () => {
      let sum = 0;
      cart.map(item => {
        let newQuantity = item.quantity;
        sum+=newQuantity
      })
      setQuantity(sum)
  }

  useEffect (()=> {displayQuantity()},[quantity, cart])

  return (
    <Navigation>
      <Link to="/"><img id="logo" src="../src/assets/flwrpwr.png" alt="logotype"/></Link>
      <Link className='hover-underline' to="/">Home</Link>
      <Link className='hover-underline' to="#">About</Link>
      <Link className='hover-underline' to="#">Contact</Link>
      <div>
        <Link to="/admin"><img id="user" src="../src/assets/user.png" alt="Admin log in"/></Link>
        <Link className='hover-underline' to="/admin">Admin</Link>
        <button onClick={handleCartClick}><img src="../src/assets/shopping.png" alt="Shopping bag"/></button>
        <div id='shop-quantity'>{quantity}</div>
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

    #shop-quantity {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: var(--secondary-color);
      color: white;
      font-weight: bolder;
      font-size: 10px;
      padding-left: 4px;
      position: absolute;
      margin-left: 120px;
      margin-top: -5px;
    }
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
    width: 30px;
    img {
        height: 20px;
      }
  }

  .hover-underline {
    position: relative;
    text-decoration: none;
  }

  .hover-underline::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 1px;
    left: 0%;
    background-color: black;
    transform-origin: center;
    transition: transform 0.25s ease-out;
  }

  .hover-underline:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }
 
`

export default Nav