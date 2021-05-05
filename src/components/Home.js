import React from 'react'
import Footer from './templates/Home/Footer'
import Header from './templates/Home/Header'
import Menu1 from './templates/Home/Menu1'
import Menu2 from './templates/Home/Menu2'
import NewProduct from './templates/Home/NewProduct'
import Product from './templates/DetailProduct/Product'

import './css/footer.css'
import './css/header.css'

const Home = ( {handleLoguot}) => (
  <div>
    <Header handleLoguot={handleLoguot} />
    <NewProduct />
    {/* <Menu1 />
    <Menu2 />
    <Product /> */}
    <Footer />
  </div>
)

export default Home
