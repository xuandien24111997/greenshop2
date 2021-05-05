import React from 'react'
import { Link} from 'react-router-dom'

const Header = ({handleLoguot}  )  => {
    return (
        <div className="container">
            <div className="header2">
            <div className="row row2">
                <div className="col-sm-3">
                    <div className="icon-text">
                        <span><i className="fas fa-phone-square-alt"></i></span>
                        <span className="text">Hotline</span>
                        <span className="text">190000000</span>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="icon-text">
                        <span><i className="fas fa-shipping-fast"></i></span>
                        <span className="text">Miễn phí giao hàng toàn quốc</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <ul className="nav navbar-nav navbar-right">
                        <li>  <Link className="link-menu" to="/">HOME</Link></li>
                    
                            <li>
                               <Link to="/manager"> QUẢN LÝ</Link>
                            </li>
                            <li>
                                <Link onClick={handleLoguot}> ĐĂNG XUẤT  </Link>
                            </li>
                            <li>
                                 <Link to="/login">ĐĂNG NHẬP</Link>
                            </li>
                    
                    </ul>
                </div>
            </div>
        </div>
        <div className="header3">
                <div className="row">
                  
                <div className="col-sm-3 head-logo">
                    <Link to='/' > <img src="./public_html/img/logo.png" className="img-responsive head-logo" /></Link>
                    </div>
                <div className="col-sm-9">
    
                <div className="col-sm-9">
                    <div id="result-search">
                    <div className="right-logo">
                    {/* hàm Search ở đây   */}
                    <form action="" method="POST">
                         <div className="input-group">
    
                           <input type="text" name="keyword" placeholder="Nhập tên cây cần tìm kiếm" autocomplete="off" className="form-control" />
                    
                          <div className="input-group-btn">
                        <button className="btn" type="submit" name="ok"><span><i className="fas fa-search"></i></span></button>
                         </div>
                         </div>
                    </form>
                      
                      </div>
                     </div>
                   </div>
                 
                <div className="col-sm-3 right-logo">
                        <div className="link-cart ">
                        <Link to="/cart">
                           <span ><i className="fas fa-cart-plus"></i> </span>
                           
                             Sản phẩm
                          
                            </Link>
                        </div>
                    </div>
                </div>
    
    
                </div>
            </div>
     </div>

    )

}

export default Header
