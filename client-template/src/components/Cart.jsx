import React from 'react'
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../styling'

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

  return (
    <Dropdown>
      
      <h2>Cart</h2>
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
      <div id="btn-wrapper">
      <Link to="/checkout"><Button id="check-out" $primary onClick={handleCartClick}>
        Go to checkout
      </Button>
      </Link>
      <Button $secondary onClick={() => {removeCart()}}>Remove all items</Button>
      </div>


    </Dropdown>
  )
}

const Dropdown = styled.div `
  font-family: jost;
  position: fixed;
  overflow-y: scroll;
  right: 0;
  top: 86px;
  bottom: 0;
  width: 30vw;
  background-color: #E3D5CA;
  padding: 30px;
    a {
      all:unset;
    }
    #btn-wrapper {
      display: flex;
      justify-content: space-around;
    }
    #check-out {
      font-size: 20px;
      padding: 2px 40px;
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