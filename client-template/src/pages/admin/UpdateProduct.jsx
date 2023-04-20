import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { Button, Title, Main } from '../../styling'
import Form from '../../components/Form'

const UpdateProduct = () => {

  const navigate = useNavigate();
  const params = useParams();

  const [newProduct, setNewProduct] = useState({});

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    try {
      const response = await fetch('https://product-api-production-0b48.up.railway.app/products/' + params.id);
      const data = await response.json();
      setNewProduct(data);
  } catch(error) {
      console.log(error)
  }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch('https://product-api-production-0b48.up.railway.app/products/' + params.id, {
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProduct)
      })
      navigate("/admin")
    } catch(error) {
      console.log(error)
    }
}

  return (
    <Main>
      <div id="wrapper">
        <Link to="/admin"><Button $secondary>&larr; Back</Button></Link>
        <Title>Update Product</Title>
        <div id="fake"></div>
      </div>
      <Form handleSubmit={handleSubmit} newProduct={newProduct} setNewProduct={setNewProduct} btnName="Update"/>
    </Main>
  )
}

export default UpdateProduct