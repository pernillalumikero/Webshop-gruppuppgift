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
`

export default Header