import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Title } from '../../styling'
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
        <Link to="/admin"><Button>&larr; Back</Button></Link>
        <Title>Create Product</Title>
        <div id="fake"></div>
      </div>
      <Form handleSubmit={handleSubmit} />
        
    </Main>
  )
}

const Main = styled.main `
  a {
    padding-top: 125px;
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
  background: var(--primary-color);
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
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


export default CreateProduct