import React from 'react'
import {Link} from 'react-router-dom'
import NewProduct from './NewProduct'

const Menu1 = () => (
  <div>
        <div className="top-sach container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu4">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <span className="title navbar-brand">HÀNG MỚI VỀ</span>
                    </div>
                    <div className="collapse navbar-collapse" id="menu4">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="">Sắp phát hành</a></li>
                            <li><a href="">Bán chạy</a></li>
                            <li><a href="">Nổi bật</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container d-flex list-menu">
                    <div className="item d-flex ">
                                     <Link to="/detailProduct"> 
                                   <img src="./public_html/img/anh2.jpg" className="img-responsive thumbnail" /> 
                                    <div className="caption">
                                        <span>Cây Kim Tiền</span>
                                        <span>.</span>
                                    </div>
                                    </Link>
                    </div>  
                   
                    <div className="item d-flex ">
                                    <a href=""><img src="./public_html/img/anh2.jpg" className="img-responsive thumbnail" /> </a>
                                    <div className="caption">
                                        <span>Cây Kim Tiền</span>
                                        <span>.</span>
                                    </div>
                    </div>  
                    <div className="item d-flex ">
                                    <a href=""><img src="./public_html/img/anh2.jpg" className="img-responsive thumbnail" /> </a>
                                    <div className="caption">
                                        <span>Cây Kim Tiền</span>
                                        <span>.</span>
                                    </div>
                    </div>  
                    <div className="item d-flex ">
                                    <a href=""><img src="./public_html/img/anh2.jpg" className="img-responsive thumbnail" /> </a>
                                    <div className="caption">
                                        <span>Cây Kim Tiền</span>
                                        <span>.</span>
                                    </div>
                    </div>  
                  <div className="item d-flex ">
                                    <a href=""><img src="./public_html/img/anh2.jpg" className="img-responsive thumbnail" /> </a>
                                    <div className="caption">
                                        <span>Cây Kim Tiền</span>
                                        <span>.</span>
                                    </div>
                    </div>  
                    {/* <div className="item d-flex ">
                            {product.map((product) => (
                            <div>
                                <img src={product.img} alt={product.tree} />
                                <h3>{product.tree}</h3>
                                <h3>{product.cost}</h3>
                                <button > Add to cart</button>
                            </div>
                            ))}
                    </div>   */}
                       
                </div>
              
  </div>
   
)

export default Menu1
