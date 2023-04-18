import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useOutletContext } from "react-router-dom";
import { Button } from '../styling'

const Product = ({product}) => {
  const [cart, setCart] = useOutletContext();


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

  return (
    <Article key={product['_id']}>
      <img src={product.image} alt="flowers" />
      <Wrapper>
        <p>{product.title}</p>
        <Line></Line>
        <p> {product.price}:-</p>
        <div>
          <Button $primary onClick={() => {addProductToCart(product)}}>Add to cart</Button>
          <Link to={"/product/" + product['_id']}><Button>Read more...</Button></Link>
        </div>
      </Wrapper>
    </Article>
  )
}

const Article = styled.article`
  width: 20vw;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: white;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    a {
      text-decoration: none;
    }

    p {
      margin-bottom: 5px;
    }
`

const Wrapper = styled.div`
  padding: 30px;
  font-family: jost;
    div {
      display: flex;
      justify-content: space-between; 
    }
`
const Line = styled.div`
  height: 1px;
  width: 100%;
  margin: 5px 0;
  background-color: black;
`

export default Product