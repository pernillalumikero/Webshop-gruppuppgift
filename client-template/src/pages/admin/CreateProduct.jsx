import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Title } from '../../styling'

const CreateProduct = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(JSON.stringify(newProduct))
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

  // const createProduct = () => {
    
  // }
 

  return (
    <Main>
      <div id="wrapper">
        <Link to="/admin"><Button>&larr; Back</Button></Link>
        <Title>Create Product</Title>
        <div id="fake"></div>
      </div>
        <Form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input type="text" name="title" value={newProduct.title} onChange={handleChange} />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" value={newProduct.price} onChange={handleChange} />
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" value={newProduct.stock} onChange={handleChange}/>
          <label htmlFor="category">Category</label>
          <select name="category" value={newProduct.category} onChange={handleChange}>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="autumn">Autumn</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="" cols="30" rows="10" value={newProduct.description} onChange={handleChange}></textarea>
          <label htmlFor="picture">Image URL</label>
          <input type="text" name="image" value={newProduct.image} onChange={handleChange}/>
          <Submit $primary type="submit" value="Create" />
        </Form>
    </Main>
  )
}

const Main = styled.main `
  a {
    padding-top: 100px;
    text-decoration: none;
    color: black;
  }
  #wrapper {
    margin: 0 auto;
    width: 65%;
    justify-content: space-around;
    display: flex;
    flex-flow: row nowrap;
  }
  #fake {
    width: 100px;
  }
`

const Submit = styled.input `
  all: unset;
  text-align: center;
  width: 30%;
  margin: 30px auto;
  background: #630436;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

const Form = styled.form `
  margin: 20px auto;
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


export default CreateProduct