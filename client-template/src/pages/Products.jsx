import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from '../components/Product';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
  try {
    const response = await fetch('https://product-api-production-0b48.up.railway.app/products')
    const data = await response.json();
    setProducts(data)
  } catch(error) {
    console.log(error)
  }
}

  return (
    <div>
      <Hero>
        <div></div>
        <h2>Experiance the power of flowers</h2>
        <button>Shop now</button>
      </Hero>
      <ProductList>
        {products.map(product => 
          <Product key={product._id} product={product}/>
        )}
      </ProductList>
    </div>
  )
}

const Hero = styled.div `
  background-image: url(../src/assets/heropicture.jpg);
  height: 100vh;
  width: 100vw;
  background-size: cover;
  div {
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: 0.4;
  }
  h2 {
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  button {
    all: unset;
    background-color: #E3D5CA;
    color: black;
    font-size: 1.5rem;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 15px 30px;
    font-family: jost;
  }
`

const ProductList = styled.section`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 3%;
  margin: 30px;
  /* &::after {
    content: "";
    width: 600px;
  } */
`

export default Products