import React from 'react'
import styled from 'styled-components'
import { Button } from '../styling'

const Footer = () => {
  return (
    <Foot>
      <article>
        <p>Sign up for our newsletter</p>
        <form action="">
          <input type="text" placeholder='E-mail'/>
          <Button $secondary>Sign up</Button>
        </form>
      </article>
      <article>Logga</article>
      <article>Kontakt</article>
    </Foot>
  )
}

const Foot = styled.footer`
  background-color: #D5BDAF;
  margin-top: 0px;
  padding: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);

  article {
    
    p {
      font-size: 1.3rem;
    }
    input {
      border: none;
      background-color: white;
      border-radius: 5px;
      padding: 7px;
      margin-right: 10px;
      width: 200px;

    }
  }
`

export default Footer