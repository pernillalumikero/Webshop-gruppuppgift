import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Title, Main } from '../../styling'
import Form from '../../components/Form'

const CreateProduct = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(newProduct)
      fetch('https://product-api-production-0b48.up.railway.app/products/', {
          method: 'POST', 
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

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image:""
  });

  return (
    <Main>
      <div id="wrapper">
        <Link to="/admin"><Button $secondary>&larr; Back</Button></Link>
        <Title>Create Product</Title>
        <div id="fake"></div>
      </div>
      <Form handleSubmit={handleSubmit} newProduct={newProduct} setNewProduct={setNewProduct} btnName="Create" />
    </Main>
  )
}

export default CreateProduct