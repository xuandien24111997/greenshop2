import React from 'react'
import Footer from './templates/Home/Footer'
import Header from './templates/Home/Header'
import './css/footer.css'
import './css/header.css'

const Home = ( {handleLoguot}) => (
  <div>
    <Header handleLoguot={handleLoguot} />
    <div>
    <div className="tab-content">
            <div id="nhanxet" className="tab-pane fade in active"><br/><br/><br/><br/><br/>
                  
                    <table className="tb-khosach">
                        <tr>
                            <th>Tên Khách Hàng</th>
                            <th>Tên Sách</th>
                            <th>Ngày Nhận Xét</th>
                            <th>Lời Nhận Xét</th>
                            <th>Action</th>
                        </tr>
                     
                       
                    </table>
                </div>
            </div>
    </div>
   
    <Footer />
  </div>
)

export default Home
