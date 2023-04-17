import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const Cart = ({cart, setCart}) => {

  const removeFromCart = (id) => {
    console.log("remove")
    console.log(id);
    
    setCart(cart.filter(item => id != item.product['_id']))
    console.log(cart);
    
  }

  // useEffect



  return (
    <Dropdown>
      <h2>Cart</h2>
      {cart.map(item =>
        <Article key={item.product._id}>
          <img src={item.product.image} alt="image" />
          <div>
            <h3>{item.product.title}</h3>
            <p>{item.product.price} sek</p>
            <p>count: {item.quantity}</p>
            <button onClick={() => {removeFromCart(item.product['_id'])}}><img src="../src/assets/trashcan.png" alt="trashcan" /></button>
          </div>
        </Article>
      )}


    </Dropdown>
  )
}

const Dropdown = styled.div `
  position: fixed;
  right: 0;
  height: 100vh;
  width: 30vw;
  background-color: #E3D5CA;
  padding: 30px;
`

const Article = styled.article `
  display: flex;
  flex-flow: row nowrap;
  img {
    height: 150px;
  }
  div {
    padding: 20px;
    button {
      all: unset;
      margin-top: 50px;
      cursor: pointer;
      img {
        height: 20px;
        
      }
    }
  }
  
`

export default Cart