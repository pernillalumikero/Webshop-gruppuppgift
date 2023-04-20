import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useOutletContext, Link } from "react-router-dom";
import { Button, Title } from "../styling";

const Product = () => {

  const [product, setProduct] = useState({})
  const params = useParams()
  const [cart, setCart] = useOutletContext();

  useEffect(() => {
    fetchProduct();
  }, [])

  const addProductToCart = (product) => {
    const index = cart.findIndex((item) => item.product._id === product._id);

    if (index === -1) {
      setCart([...cart, {product, quantity: 1}])
      console.log(cart)
    } else {
      increaseQuantity(cart[index]);
    }
  }

  const increaseQuantity = (product) => {
    const index = cart.findIndex((item) => item.product._id === product.product._id);
    const newCartItems = [...cart];
    newCartItems[index].quantity++;
    setCart(newCartItems);
  };


  const fetchProduct = async () => {
    try {
      const response = await fetch ('https://product-api-production-0b48.up.railway.app/products/' + params.id)
      const data = await response.json()
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
          <Title>{product.title}</Title>
          <p id="price">{product.price}:-</p>
        </div>
        <Button $primary onClick={() => {addProductToCart(product)}}>Add to cart</Button>
        <p id="info">{product.description}</p>
        <p>Category: {product.category}</p>
        <div id="stock">
          <b>Stock: &#20;</b> <p> {product.stock}</p>
        </div>
        <Link to="/"><Button $secondary onClick={window.scrollTo(0, 0)} id="back-btn">&larr; Back</Button></Link>
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

   h2 {
    padding: 0;
   }

  img {
    height: fit-content;
    width: 30vw;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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
    margin-top: 20px;
  }

  #info {
    margin-bottom: 40px;
  }

  #back-btn {
    width: 30%;
  }

  a {
    text-decoration: none;
  }
  
  button {
    text-align:center;
    width: 100%;
    margin: 30px 0;
  }

`


export default Product