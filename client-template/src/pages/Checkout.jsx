import React, { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import styled from 'styled-components';



const Checkout = () => { 
  const [cart, setCart] = useOutletContext();
  const increaseQuantity = (product) => {
    console.log(product)
    const index = cart.findIndex((item) => item.product._id === product.product._id);
    console.log(index)
    const newCartItems = [...cart];
    console.log(newCartItems)
    newCartItems[index].quantity++;
    setCart(newCartItems);
  };
  const decreaseQuantity = (product) => {
    console.log(product)
    const index = cart.findIndex((item) => item.product._id === product.product._id);
    console.log(index)
    const newCartItems = [...cart];
    console.log(newCartItems)
    if( newCartItems[index].quantity>1){
      newCartItems[index].quantity--;
    }
  
    
    setCart(newCartItems);
  };
  const removeFromCart = (id) => {
    console.log("remove")
    console.log(id);
    
    setCart(cart.filter(item => id != item.product['_id']))
    console.log(cart);
    
  }
  console.log(cart);
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

  return (
    <Checkoutpage>      <h2>Checkout</h2>
    {cart.map(item =>
      <Article key={item.product._id}>
        <img src={item.product.image} alt="image" />
        <div>
          <h3>{item.product.title}</h3>
          <p>{item.product.price} sek</p>
          <div className='count'>
          <button onClick={ () =>{decreaseQuantity(item)}}>-</button>
          <p> {item.quantity}</p>
          <button onClick={ () =>{increaseQuantity(item)}} >+</button>
          <button id="delete" onClick={() => {removeFromCart(item.product['_id'])}}><img src="../src/assets/trashcan.png" alt="trashcan" /></button>
          </div></div>
      </Article>

    )}
    <h3>total {total}</h3>
    
    </Checkoutpage>
  )
  
}
const Checkoutpage = styled.section`
padding: 100px;
font-family: jost;
`
const Article = styled.article `
  display: flex;
  flex-flow: row nowrap;
  
  img {
    height: 150px;
  }
  div {
    padding: 20px;
    .count {
      gap: 5px;
      display: flex;
      button {
        margin:0;
        background-color:#59534e;
        color: white;
        padding: 5px;
        border-radius: 3px;
      }

    }
    #delete {
      all: unset;
      background-color: none;
      
      cursor: pointer;
      img {
        height: 20px;
        
      }
    }
  }`
export default Checkout