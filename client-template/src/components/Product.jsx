import React from 'react'
import styled from 'styled-components'

const Product = ({product}) => {
  return (
    <Article key={product['_id']}>
      <img className='hej' src={product.image} alt="flowers" />
      <Wrapper>
        <p>{product.title}</p>
        <Line></Line>
        <p> {product.price} SEK</p>
        <button>Add to cart</button>
        <button>Read more...</button>
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
`

const Wrapper = styled.div`
  padding: 20px;
  font-family: jost;
`
const Line = styled.div`
  height: 1px;
  width: 90%;
  background-color: black;
`

export default Product