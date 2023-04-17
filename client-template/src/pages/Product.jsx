import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useOutletContext } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({})
  const params = useParams()
  const [cart, setCart] = useOutletContext();

  useEffect(() => {
    fetchProduct();
  }, [])

  const addProductToCart = (product) => {
    console.log(product);
    const index = cart.findIndex((item) => item.product._id === product._id);
    console.log(index);

    if (index === -1) {
      setCart([...cart, {product, quantity: 1}])
      console.log(cart)
    } else {
      increaseQuantity(cart[index]);
    }
  }

  const increaseQuantity = (product) => {
    console.log(product)
    const index = cart.findIndex((item) => item.product._id === product.product._id);
    console.log(index)
    const newCartItems = [...cart];
    console.log(newCartItems)
    newCartItems[index].quantity++;
    setCart(newCartItems);
  };


  const fetchProduct = async () => {
    try {
      const response = await fetch ('https://product-api-production-0b48.up.railway.app/products/' + params.id)
      const data = await response.json()
      console.log(data);
      setProduct(data);
    } catch(error){
      console.log(error)
    }
  }
  
  return (
    <Section>
      <img src={product.image} alt="flower" />
      <div id="wrapper">
        <div id="heading">
          <h1>{product.title}</h1>
          <p id="price">{product.price} sek</p>
        </div>
        <button onClick={() => {addProductToCart(product)}}>Add to cart</button>
        <p id="info">{product.description}</p>
        <div id="stock">
        <b>Stock: &#20;</b> <p> {product.stock}</p>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  font-family: jost;
  margin: auto;
  width: fit-content;
  padding-top: 100px;
  display: flex;
  flex-flow: row nowrap;
  h1 {
    font-size: 30px;
  }
  img {
    height: fit-content;
    width: 30vw;
  }
  #price {
    font-size: 23px;
  }
  #wrapper {
    width: 40vw;
    padding: 5%;
  }
  #heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  #stock {
    display: flex;
  }
  #info {
    margin-bottom: 30px;
  }

  button {
    all: unset;
    text-align:center;
    width: 100%;
    margin: 30px 0;
    background: #59534e;
    color: white;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

`


export default Product