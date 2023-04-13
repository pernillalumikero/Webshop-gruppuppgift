import React from 'react'
import { useState, useEffect } from 'react';

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
      Products
      {products.map(product => {
        return <article key={product['_id']}>
          <p>{product.title}</p>
          <p>Pris: {product.price} kr</p>
          <img src={product.image} alt="flowers" />
          <button>Add to cart</button>
          <button>Read more...</button>
          </article>
      })}
    </div>
  )
}

export default Products