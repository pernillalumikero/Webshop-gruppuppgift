import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet} from 'react-router-dom'
import { useState } from 'react'

const Root = () => {
  
  const[cart, setCart] = useState([]);

  return (
    <div>
      <Header cart={cart} setCart={setCart}/>
        <Outlet context={[cart, setCart]} />
      <Footer />
    </div>
  )
}

export default Root
