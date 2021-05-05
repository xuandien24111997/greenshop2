import React from 'react'
import Footer from './templates/Home/Footer'
import Header from './templates/Home/Header'
import Admin from './templates/Admin/Admin'
import Admin1 from './templates/Admin/Admin1'
import Admin2 from './templates/Admin/Admin2'
import User from './templates/Admin/User'
import Comment from './templates/Admin/Comment'
import './css/footer.css'
import './css/header.css'
import './css/cart.css'
import './css/admin.css'

const Manager = ( {handleLoguot} ) => (
  <div>
    <Header handleLoguot={handleLoguot} />
    <Admin />
    <Admin1 />
    <Admin2 />
    <User />
    <Comment />
    <Footer />
  </div>
)

export default Manager
