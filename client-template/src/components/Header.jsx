import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderStyling>
      <nav>
        <Nav />
      </nav>
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