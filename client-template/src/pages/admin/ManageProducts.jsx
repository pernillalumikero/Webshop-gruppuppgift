import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

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
    <Main>
      
      <Title>Manage Products</Title>
      <Button $primary id='create-btn'>+ Create new product</Button>
      
        <Table>
          <thead>
              <tr>
                  <th id="title-col">Title</th>
                  <th id="price-col">Price</th>
                  <th id="category-col">Category</th>
                  <th id="stock-col">Stock</th>
                  <th id="date-col">Date</th>
                  <th></th>
                  
              </tr>
          </thead>
          <tbody>
            {products.map(product => 
              
              
              <tr >
                <td>{product.title}</td>
                <td>{product.price}:-</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{new Date(product.date).toLocaleString()}</td>
                <td><Button>Update</Button>
                <Button $primary>Delete</Button></td>
                
              </tr>
              
            )}
          </tbody>
        </Table>
    </Main>
  )
}



const Title = styled.h2`
  padding-top: 100px;
  text-align: center;
`

const Table = styled.table`

  width: 90%;
  margin: 30px auto;
  color: white;
  table-layout: fixed;
  box-shadow: 0 0 10px 5px rgb(32, 41, 50, 0.3);
  

  table, tr, th, td {
      border: 2px solid rgb(44, 56, 69);
      border-collapse: collapse;
  }

  th, td {
      padding: 20px;
  }

  #stock-col, #price-col {
      width: 15%;
  }

  


  th {
      background-color: rgb(32, 41, 50);
      text-align: left;
  }

  tbody tr:nth-child(odd) {
      background-color: rgb(36, 46, 57);
  }

  tbody tr:nth-child(even) {
      background-color: rgb(44, 56, 69);
  }

`

const Button = styled.button `
  all: unset;
  /* margin-top: 5px; */
  margin-right: 15px;
  background: ${props => props.$primary ? "#630436" : "#E3D5CA"};
  color: ${props => props.$primary ? "white" : "black"};
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  a {
  all: unset;
  }

`

const Main = styled.main`
  
`


export default ManageProducts