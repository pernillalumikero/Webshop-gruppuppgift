import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Title } from '../../styling'

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

const deleteProduct = async (id) => {
  try {
    await fetch('https://product-api-production-0b48.up.railway.app/products/' + id, {
        method: 'DELETE',
    });
    fetchProducts();
  } catch(error) {
    console.log(error)
  }
}

  return (
    <main>
      <Title>Manage Products</Title>
        <Table>
          <thead>
              <tr>
                  <th id="title-col">Title</th>
                  <th id="price-col">Price</th>
                  <th id="category-col">Category</th>
                  <th id="stock-col">Stock</th>
                  <th id="date-col">Date</th>
                  <th id="btn-col">
                    <Link to="/create"><Button id='create-btn'>+ Create new product</Button></Link>
                  </th>
              </tr>
          </thead>
          <tbody>
            {products.map(product => 
              <tr>
                <td>{product.title}</td>
                <td>{product.price}:-</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{new Date(product.date).toLocaleString()}</td>
                <td id="btn-field"><Link to={"/update/" + product["_id"]}><Button>Update</Button></Link>
                <Button onClick={() => deleteProduct(product._id)} $primary>Delete</Button></td>
              </tr> 
            )}
          </tbody>
        </Table>
    </main>
  )
}

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

    #btn-field {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    #create-btn {
      background-color: var(--header-color);
    }
    #btn-col {
      text-align: center;
    }
`


export default ManageProducts