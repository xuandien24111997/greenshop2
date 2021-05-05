import React, {useState ,useEffect} from 'react'
import Header from './templates/Home/Header'
import Footer from './templates/Home/Footer'
import { Link } from 'react-router-dom'

function Cart () {
    const [soluong, setSoluong] = useState('');
    const [ketQua, setKetQua] = useState()
    function Update () {
        var ket = (soluong) * 100000;
        setKetQua(ket + " VND");
    }

    return (
    <div>
        <Header />
        <div id="content-cart" className="hidden-xs">
        <div className="container">
            <h1 className="giohang">GIỎ HÀNG</h1><br/>
            <table className="table table-bordered responstable">
                <tr>
                    <th>Gỡ Bỏ</th>
                    <th>Hình Ảnh</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Thành Tiền</th>
                </tr>
                <tr>         
                    <td><a href="" className="btn btn-danger"><span className="glyphicon "> <i className="fas fa-minus-circle"></i></span></a></td>
                    <td><img src="./public_html/img/CayKimTien.jpg" className="img-cart"  /></td>
                    <td>Cây Kim Tiền</td>
                    <td>100.000 VNĐ</td>
                    <td> 
                    <div className="">
                    <input placeholder="So Luong" min={0} defaultValue={soluong} onChange={(e) => setSoluong(e.target.value)} />
                    <button type="button" class="btn btn-outline-success" onClick={Update}>Update</button>
                    </div>
                    </td>
                    <td> <input placeholder="Tien" value={ketQua} readOnly disabled /> </td>
                </tr>       
                  
               
                       


            </table><br/>
            <div className="text-center">                
                <Link className="btn btn-warning" to='/'>Ngại gì, mua tiếp</Link>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-6">
                </div>
                <div className="col-sm-6">
                    <div className="tong">
                        <div className="title">
                           
                        </div><br/>
                        <div className="text-right">
                        <Link to="/checkout">
                            <a href="" className="btn btn-success">THANH TOÁN</a>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
    )
 
}
export default Cart
