import React from 'react'
import styled from 'styled-components'

const Form = ({handleSubmit, newProduct, setNewProduct, btnName}) => {

  const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      let newObject = {
        ...newProduct,
        [name]: value
      }
      setNewProduct(newObject)
    }

  return (
    <FormStyling onSubmit={handleSubmit}>
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
      <Submit $primary type="submit" value={btnName} />
    </FormStyling>
  )
}

const FormStyling = styled.form `
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

export default Form
