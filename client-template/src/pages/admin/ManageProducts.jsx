import React, { useEffect, useState } from 'react'

const ManageProducts = () => {

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
      ManageProducts
      {products.map(product => {
        return <p>{product.title}</p>
      })}
    </div>
  )
}

export default ManageProducts