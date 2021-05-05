import React from 'react'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Home from './Home'
import Manager from './Manager'
import Login from './Login'
import Register from './Register'
import Cart from './Cart'
import Checkout from './Checkout'
import DetailProduct from './DetailProduct'


const App = () => (
  <Router>
     <div>
       <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/manager"  component={Manager}  />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/detailProduct" component={DetailProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
       </Switch>
    
    </div>
  </Router>
 
)

export default App
