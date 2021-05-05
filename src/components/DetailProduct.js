import React from 'react'
import Footer from './templates/Home/Footer'
import Header from './templates/Home/Header'
import DetailPro from './templates/DetailProduct/DetailPro'
import fire from '../fire'
import './css/footer.css'
import './css/header.css'
import './css/cart.css'
import './css/admin.css'

const DetailProduct = () => {

  const addOrEdit = obj => {
  fire.child('contacts').push(
     obj,
     err =>{
       if(err) 
         console.log(err);
        
     }
  )

  }

  return (
    <>
    <div>
  
    <Header />
    <DetailPro addOrEdit={addOrEdit} />
    <Footer />
  </div>
  </>
  );
 
  }

export default DetailProduct
