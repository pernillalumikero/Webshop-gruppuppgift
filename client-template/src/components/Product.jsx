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
        <div>
          <Button $primary>Add to cart</Button>
          <Button>Read more...</Button>
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

const Button = styled.button `
  all: unset;
  margin-top: 5px;
  background: ${props => props.$primary ? "#E3D5CA" : "#59534e"};
  color: ${props => props.$primary ? "black" : "white"};
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

`

export default Product