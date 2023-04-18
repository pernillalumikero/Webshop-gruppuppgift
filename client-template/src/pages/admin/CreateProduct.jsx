import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Product from '../Product';

const CreateProduct = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct();
}

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image:""

  });

  const handleChange = (e) => {
    e.preventDefault;
    let name = e.target.name;
    let value = e.target.value;
    let newObject = {
      ...newProduct,
      [name]: value
    }
    setNewProduct(newObject)
    console.log(newProduct)
  }

  const createProduct = async () => {
    try {
      fetch('https://product-api-production-0b48.up.railway.app/products', {
        method: "POST", 
          headers: {
            "Content-Type": "aplication/json"
          },
          body: JSON.stringify({
            newProduct
          })
      })
      // navigate("/admin")
    } catch(error) {
      console.log(error)
    }
  }
 

  return (
    <div>
    <Title>CreateProduct</Title>
    <Form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title</label>
      <input type="text" name="title" value={newProduct.title} onChange={handleChange} />
      <label htmlFor="price">Price</label>
      <input type="text" name="price" value={newProduct.price} onChange={handleChange} />
      <label htmlFor="stock">Stock</label>
      <input type="text" name="stock" value={newProduct.stock} onChange={handleChange}/>
      <label htmlFor="category">Category</label>
      <select name="category">
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="winter">Winter</option>
        <option value="autumn">Autumn</option>
      </select>
      <label htmlFor="description">Description</label>
      <textarea name="description" id="" cols="30" rows="10" value={newProduct.description} onChange={handleChange}></textarea>
      <label htmlFor="picture">Image URL</label>
      <input type="text" name="picture" value={newProduct.image} onChange={handleChange}/>
      <Submit $primary type="submit" value="Submit" />
    </Form>
    </div>
  )
}

const Submit = styled.input `
  all: unset;
  text-align: center;
  width: 30%;
  margin: 30px auto;
  background: ${props => props.$primary ? "#630436" : "#E3D5CA"};
  color: ${props => props.$primary ? "white" : "black"};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  a {
    all: unset;
  }
`


const Form = styled.form `
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-flow: column nowrap;

  input, select {
    padding: 7px;
  }

  label {
    margin-top: 5px;
  }
`
const Title = styled.h2`
  padding-top: 100px;
  text-align: center;
`

export default CreateProduct