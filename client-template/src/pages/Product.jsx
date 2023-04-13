import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Product = () => {
  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    fetchProduct();
  }, [])


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
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding-top: 100px;
  display: flex;
  flex-flow: row nowrap;
  h1 {
    
  }
`

export default Product