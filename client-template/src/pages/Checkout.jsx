import React, { useState, useEffect } from 'react'
import { useOutletContext, Link } from "react-router-dom";
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
                  <p>{item.quantity}</p>
                  <button onClick={ () =>{increaseQuantity(item)}}>+</button>
                  <button id="delete" onClick={() => {removeFromCart(item.product['_id'])}}>
                    <img id="trashcan" src="../src/assets/trashcan.png" alt="trashcan" />
                  </button>
                </div>
              </td>
            </Tablerow>
          )}
        </motion.tbody>
      </table>
      {total == 0 
        ? <div id="empty-cart">
            <h3 className='total'>Your cart is empty</h3> 
            <Link to='/'><Button $primary>Shop here!</Button></Link>
          </div>
        : <div> 
            <h3 className='total'>Total {total}:-</h3>
              <Form>
                <div>
                  <label htmlFor="firstname">Firstname</label>
                  <input type="text" name='firstname' />
                  <label htmlFor="address">Address</label>
                  <input type="text" name='address' />
                  <label htmlFor="phone">Phone</label>
                  <input type="text" name='phone' />
                </div>
                <div>
                  <label htmlFor="name">Lastname</label>
                  <input type="text" name='lastname' />
                  <label htmlFor="zip-code">ZIP code</label>
                  <input type="text" name='zip-code' />
                  <label htmlFor="mail">E-mail</label>
                  <input type="text" name='mail' />
                <input id='submit' type="submit" value='Go to payment'/>
                </div>
              </Form>
            </div>}
    </Checkoutpage>
  )
}

const Form = styled.form `

  position: absolute;
  top: 170px;
  right: 30px;
  display: flex;
  flex-flow: row nowrap;
  background-color: var(--secondary-color);
  color: white;
  padding: 30px;
  column-gap: 20px;

  div {
    display: flex;
    flex-flow: column nowrap;
    
    label {
      margin-top: 15px;
    }

    input {
      border: 0.5px solid var(--secondary-color);
      width: 300px;
      padding: 10px;
    }

    #submit {
      margin-top: 20px;
      background-color: var(--primary-color);
      color: white;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      } 
    }
  }
`
const Checkoutpage = styled.section`

  font-family: jost;
  padding: 0 100px;
  min-height: 80vh;

    #empty-cart {
      display: flex;
      flex-flow: row nowrap;
      gap: 20px;
      justify-content: center;
      margin-left: -160px;
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
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin: 10px 0;
  }

  .count {
    gap: 5px;
    display: flex;
    flex-flow: row nowrap;
    align-content: center;

      button {
        margin:0 8px;
        background-color: var(--secondary-color);
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
          box-shadow: none;
          margin: 0;
        }
  }
    
  #delete {
    all: unset;
    background-color: none;   
    cursor: pointer;
  }
`

export default Checkout