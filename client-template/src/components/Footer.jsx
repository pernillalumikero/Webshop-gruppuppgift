import React from 'react'
import styled from 'styled-components'
import { Button } from '../styling'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Foot>
      <article id="profile">
        <Link to="/"><img id="logo" src="../src/assets/flwrpwr.png" alt="logotype"/></Link>
        <div>
          <h3>Flower Power</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cum? Aut odio assumenda, aspernatur voluptatum ipsam illum doloribus, tenetur aliquam dignissimos, unde ducimus ad exercitationem earum accusamus nobis perferendis recusandae.</p>
        </div>
      </article>
      <article>
        <p>Sign up for our newsletter</p>
        <form action="">
          <input type="text" placeholder='E-mail'/>
          <Button $secondary>Sign up</Button>
        </form>
      </article>
      
      <article>

        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
      </article>
    </Foot>
  )
}

const Foot = styled.footer`
  background-color: #D5BDAF;
  margin-top: 0px;
  padding: 80px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 5vw;
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

    #logo {
      height: 100px;
    }

    .fa {
    padding: 20px;
    font-size: 30px;
    width: 50px;
    text-align: center;
    text-decoration: none;
    }

    /* Add a hover effect if you want */
    .fa:hover {
      opacity: 0.7;
    }

    /* Set a specific color for each brand */

    /* Facebook */
    .fa-facebook, .fa-instagram {
      
      color: black;
    }

  
  }

  #profile {
    display: flex;
    flex-flow: row nowrap;

    p {
      font-size: 1rem;
    }
  }
`

export default Footer