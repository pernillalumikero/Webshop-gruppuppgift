import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import Cart from './Cart'
import { useState } from 'react'
import { useEffect } from 'react'



const Header = ({cart, setCart}) => {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => {
    {cartVisible  ? setCartVisible(false) : setCartVisible(true)}
  }

  // useEffect(() => {
  //   console.log("Running useEffect")
  // })
  
  return (
    <HeaderStyling>
      <Nav handleCartClick={handleCartClick}/>
      {cartVisible  ? <Cart cart={cart} setCart={setCart}/> : null}
      
    </HeaderStyling>
  )
}

const HeaderStyling = styled.header `
background-color: #D5BDAF;
position: fixed;
width: 100vw;
z-index: 3;
`

export default Header