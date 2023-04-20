import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import Cart from './Cart'
import { useState } from 'react'

const Header = ({cart, setCart}) => {

  const [cartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => {
    {cartVisible  ? setCartVisible(false) : setCartVisible(true)}
  }
  
  return (
    <HeaderStyling>
      <Nav handleCartClick={handleCartClick} cart={cart}/>
      {cartVisible  
        ? <Cart cart={cart} setCart={setCart} handleCartClick={handleCartClick} setCartVisible={setCartVisible}/> 
        : null}
    </HeaderStyling>
  )
}

const HeaderStyling = styled.header `
  background-color: var(--header-color);
  position: fixed;
  width: 100vw;
  z-index: 10;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
`

export default Header