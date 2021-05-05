import React from 'react'
const Admin1 = () => (
    <div>
        <div id="admin-crud" className="hidden-md hidden-xs hidden-sm">
        <div className="container">
            <div className="link-top">
                <ul className="nav nav-pills">
                    <li className="active"><a href="#admin-page" data-toggle="pill">ADMIN PAGE</a></li>
                    <li><a href="#theloai" data-toggle="pill">THỂ LOẠI CÂY</a></li>
                    <li><a href="#khocay" data-toggle="pill">KHO CÂY</a></li>
                    <li><a href="#user" data-toggle="pill">NGƯỜI DÙNG</a></li>
                    <li><a href="#nhanxet" data-toggle="pill">NHẬN XÉT CỦA NGƯỜI DÙNG</a></li>
                </ul>
            </div>
            <div className="tab-content">
          
                <div id="khocay" className="tab-pane fade in active"><br/><br/><br/>
                    <h5 className="text-center"><a href="" className="btn btn-md btn-success">THÊM CÂY MỚI</a></h5>
                    <table className="tb-khosach">
                        <tr>
                            <th>ID Cây</th>
                            <th>Tên Cây</th>
                            <th>Hình Ảnh</th>
                            <th>Giá</th>
                            <th>Hình Thức</th>
                            <th>Mã Thể Loại</th>
                            <th>Action</th>
                        </tr>
                       
                        <tr>
                            <td>123123</td>
                            <td>Cây Kim Tiền</td>
                            <td><img src="./public_html/img/anh2.jpg"/></td>
                            <td>100.000VNĐ</td>
                            <td>Còn hàng</td>
                            <td>Cây để bàn</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_book" id="">DELETE</a>
                            </td>
                        </tr>
                        <tr>
                            <td>123123</td>
                            <td>Cây Kim Tiền</td>
                            <td><img src="./public_html/img/anh2.jpg"/></td>
                            <td>100.000VNĐ</td>
                            <td>Còn hàng</td>
                            <td>Cây để bàn</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_book" id="">DELETE</a>
                            </td>
                        </tr>
                        <tr>
                            <td>123123</td>
                            <td>Cây Kim Tiền</td>
                            <td><img src="./public_html/img/anh2.jpg"/></td>
                            <td>100.000VNĐ</td>
                            <td>Còn hàng</td>
                            <td>Cây để bàn</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_book" id="">DELETE</a>
                            </td>
                        </tr>
                       
                    </table>
               
                </div>
              
             
            </div>
        </div>
    </div>
    </div>
)
export default Admin1