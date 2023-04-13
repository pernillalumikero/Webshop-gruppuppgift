import React from 'react'
import styled from 'styled-components'

const Product = ({product}) => {
  return (
    <Article key={product['_id']}>
      <img className='hej' src={product.image} alt="flowers" />
      <p>{product.title}</p>
      <p>Pris: {product.price} kr</p>
      <button>Add to cart</button>
      <button>Read more...</button>
    </Article>
  )
}

const Article = styled.article`
  width: 20vw;
  img {
    width: 100%;
    object-fit: cover;
  }
`

export default Product