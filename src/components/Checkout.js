import React from 'react'
import Header from './templates/Home/Header'
import Footer from './templates/Home/Footer'

const Checkout = () => (
    <div>
        <Header />
        <div id="content-cart" className="hidden-xs">
        <div className="container">
            <h1 className="giohang">Thanh Toán</h1><br/>
            <table className="table table-bordered">
                <tr>
                    <th className="c2">Tên Sản Phẩm</th>
                    <th className="c3">Giá</th>
                    <th className="c4">Số Lượng</th>
                    <th className="c1">Thành Tiền</th>
                </tr>
                <tr>
                    <td className=""> Cây Kim Tiền</td>
                    <td className="">100.100 VNĐ</td>
                    <td className=""> 
                    <input type="text" disabled value="5" />
                    </td>
                    <td className=""> 500.000 VNĐ </td>
                </tr>       
                       


            </table><br/>


            <div className="text-center">                
            <div className="row">
              <div className="col-sm-3"></div>
            <div className="col-sm-6 col-xs-12">
                <div className="dangki-left">
                    <div className="left-title">
                        <div className="gachchan" >
                        <h1 className="giohang">Nhập địa chỉ thanh toán</h1><br/>
                        </div>
                    </div>

                    <div>
                        <form action="" method="POST" className="form-horizontal">
                        <div className="form-group">
                            <label for="email">Địa chỉ nhận:</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="form-group">
                            <label for="pwd">Tên liên hệ:</label>
                            <input type="text" className="form-control" id="pwd"/>
                        </div>
                        <div className="form-group">
                            <label for="pwd">Số điện thoại:</label>
                            <input type="number" className="form-control" id="pwd" minLength="9" maxLength="11" />
                        </div>
                       
                        
                        </form>
                    </div>
                </div>
            </div>
	            </div>
              <div className="col-3"></div>
            </div>
            <br/>
            <div className="text-center">                
                <a href="" className="btn btn-warning">Hoàn tất thanh toán!</a>
            </div>
            <br/>
           
        </div>
    </div>
    <Footer />
    </div>
 
)

export default Checkout
