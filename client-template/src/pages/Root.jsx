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
      {/* <section> */}
        <Outlet context={[cart, setCart]} />
      {/* </section> */}
      <Footer />
    </div>
  )
}

export default Root
