import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from '../components/Product';
import { motion } from 'framer-motion'

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
const arrowStyle = {
  display: "inline-block",
  width: "1rem",
  height: "1rem",
  borderRadius: "0.5rem"
};

const bounceTransition = {
  y: {
    duration: 0.8,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeOut"
  }
};

const scrollToTarget = () => {
  location.href = '#scrolltarget'
}

  return (
    <Main>
      <Hero>
        <div id="dimmer-div"></div>
        <div id="h2-wrapper">
          <motion.h2
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 2}}
          >
            Experience the <span>power</span> of <span>flowers</span>
          </motion.h2>
        </div>
          <button onClick={scrollToTarget}>Shop now <motion.span
           
        style={arrowStyle}
        transition={bounceTransition}
        animate={{
          y: ["40%", "-40%"],
        }}>&darr;
      </motion.span>
      </button>
      </Hero>
      <ScrollTarget id='scrolltarget'></ScrollTarget>
      <ProductList>
        {products.map(product => 
          <Product key={product._id} product={product}/>
        )}
      </ProductList>
    </Main>
  )
}

const Main = styled.main`
  /* height: 3000px; */
`

const Hero = styled.div `
  background-image: url(../src/assets/heropicture.jpg);
  height: 100vh;
  width: 100vw;
  background-size: cover;

  #dimmer-div {
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: 0.4;
  }
  #h2-wrapper {
    width: 100vw;
    top: 300px;
    position:absolute;
  }

  h2 {
    text-align: center;
    color: white;
    font-size: 3.4rem;
    span:first-child {
      font-family: italiana;
    }
    span:last-child {
      font-family: italianno;
      font-size: 4.5rem;
    }
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
    cursor: pointer;
  }
`

const ScrollTarget = styled.div`
  position: absolute;
  top: 90vh;
`

const ProductList = styled.section`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 3%;
  padding: 30px 50px 120px 50px;
`

export default Products