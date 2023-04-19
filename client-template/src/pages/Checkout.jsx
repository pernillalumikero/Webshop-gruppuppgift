import React, { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import styled from 'styled-components';
import { motion } from 'framer-motion';



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
    <Checkoutpage>      
    <h2>Checkout</h2>
    <table>
      <tbody
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      transition = {{duration: 2, staggerChildren: 0.3}}>
        {cart.map(item =>
          <Tablerow key={item.product._id}
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{duration: 2}}
          >
            <td>
              <img src={item.product.image} alt="image" />
            </td>
            <td>
              <h3>{item.product.title}</h3>
              <p>{item.product.price}:-</p>
            </td>
            <td>
              <div className='count'>
                <button onClick={ () =>{decreaseQuantity(item)}}>-</button>
                <p> {item.quantity}</p>
                <button onClick={ () =>{increaseQuantity(item)}} >+</button>
                <button id="delete" onClick={() => {removeFromCart(item.product['_id'])}}><img id="trashcan" src="../src/assets/trashcan.png" alt="trashcan" /></button>
              </div>
            </td>
          </Tablerow>
        )}
      </tbody>
    </table>

    {total==0?<h3>Your cart is empty</h3>:  <h3>Total {total}:-</h3>}
    
    </Checkoutpage>
  )
  
}
const Checkoutpage = styled.section`
padding: 100px;
font-family: jost;
`
const Tablerow = styled(motion.tr) `
  td {
    padding: 0 20px; 
  }

  img {
    height: 150px;
    width: 100px;
    object-fit: cover;
  }

  .count {
    gap: 5px;
    display: flex;
    flex-flow: row nowrap;
    align-content: center;

      button {
        margin:0 8px;
        background-color:#59534e;
        color: white;
        border-radius: 3px;
        width: 20px;
        height: 25px;
      }
      p {
        font-size: 20px;
       
      }
      #trashcan { 
          height: 20px;
          width: 20px;
        }
  }
    
    #delete {
      all: unset;
      background-color: none;   
      cursor: pointer;
    }`
export default Checkout