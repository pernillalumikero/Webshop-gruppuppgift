import React from 'react'
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Cart = ({cart, setCart, handleCartClick}) => {

  const removeFromCart = (id) => {
    console.log("remove")
    console.log(id);
    
    setCart(cart.filter(item => id != item.product['_id']))
    console.log(cart);
    
  }

  const [total, setTotal] = useState(0)
  const calculateTotal = () => {
  let sum=0
   cart.map(item => {
    let price=item.product.price*item.quantity
    sum+=price
   })
   setTotal(sum)

  
  }
  useEffect (()=> {calculateTotal()},[total, cart])

  const removeCart = () => {
    setCart([])
  }

  const scollToRef = useRef();

  return (
    <Dropdown>
      
      <h2>Cart</h2>
      <button id='clear-btn' onClick={() => {removeCart()}}>Remove all items</button>
      {cart.map(item =>
        <Article key={item.product._id}>
          <img src={item.product.image} alt="image" />
          <div>
            <h3>{item.product.title}</h3>
            <p>{item.product.price}:-</p>
            <p>count: {item.quantity}</p>
            <button onClick={() => {removeFromCart(item.product['_id'])}}><img src="../src/assets/trashcan.png" alt="trashcan" /></button>
          </div>
        </Article>
      )}
      <h3>Total {total}:-</h3>
      <Link to="/checkout"><button onClick={handleCartClick} id='checkout-btn'>
        Go to checkout
      </button>
      </Link>


    </Dropdown>
  )
}

const Dropdown = styled.div `
  font-family: jost;
  position: fixed;
  overflow-y: scroll;
  right: 0;
  top: 90px;
  bottom: 0;
  width: 30vw;
  background-color: #E3D5CA;
  padding: 30px;
  a {
    all:unset;
  }
  #clear-btn {
    all: unset;
    text-align:center;
    width: 40%;
    margin: 30px 0;
    background: #59534e;
    color: white;
    padding: 3px;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  #checkout-btn {
    all: unset;
    text-align:center;
    width: 100%;
    margin: 30px 0;
    background: #630436;
    color: white;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
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