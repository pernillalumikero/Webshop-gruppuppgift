import React, { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageVariant, TextVariant } from '../animations'
import { Button, Title } from '../styling';



const Checkout = () => { 
  const [cart, setCart] = useOutletContext();
  const increaseQuantity = (product) => {
    const index = cart.findIndex((item) => item.product._id === product.product._id);
    const newCartItems = [...cart];
    newCartItems[index].quantity++;
    setCart(newCartItems);
  };

  const decreaseQuantity = (product) => {
    const index = cart.findIndex((item) => item.product._id === product.product._id);
    const newCartItems = [...cart];
    if( newCartItems[index].quantity>1){
      newCartItems[index].quantity--;
    }
    setCart(newCartItems);
  };

  const removeFromCart = (id) => {    
    setCart(cart.filter(item => id != item.product['_id']))
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

  return (
    <Checkoutpage>      
    <Title>Checkout</Title>
    <table>
      <motion.tbody
        initial="start"
        animate="stop"
        transition="transition"
        variants={PageVariant}
        id="page"
      >
        {cart.map(item =>
          <Tablerow key={item.product._id} variants={TextVariant}>
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
      </motion.tbody>
    </table>
    {total == 0 
      ? <div id="empty-cart">
          <h3 className='total'>Your cart is empty</h3> 
          <Button $primary >Shop here!</Button>
        </div>
      : <div> 
          <h3 className='total'>Total {total}:-</h3>
            <Form action="">
              <label htmlFor="firstname">Firstname</label>
              <input type="text" name='firstname' />
              <label htmlFor="name">Lastname</label>
              <input type="text" name='lastname' />
              <label htmlFor="address">Address</label>
              <input type="text" name='address' />
              <label htmlFor="phone">Phonenumber</label>
              <input type="text" name='phone' />
              <label htmlFor="mail">Email</label>
              <input type="text" name='mail' />
              <input type="submit" />
            </Form>
          </div>}
    </Checkoutpage>
  )
  
}

const Form = styled.form `
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
`
const Checkoutpage = styled.section`
font-family: jost;
padding: 0 100px;
min-height: 60vh;
  #empty-cart {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
  }

  .total {
    margin-left: 160px;
    font-size: 25px;
  }
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