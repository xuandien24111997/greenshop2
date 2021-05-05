import React from 'react'
const User = () => (
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
          
                <div id="user" className="tab-pane fade in active"><br/><br/><br/>
                    <h5 className="text-center"><a href="" className="btn btn-md btn-success">THÊM ADMIN</a></h5>
                    <table className="tb-khosach">
                        <tr>
                            <th>Email</th>
                            <th>Họ Tên</th>
                            <th>Ngày Sinh</th>
                            <th>Giới Tính</th>
                            <th>Quyền Truy Cập</th>
                            <th>Action</th>
                        </tr>
                      
                        <tr>
                            <td>dienhx97@gmail.com</td>
                            <td>Hoàng Xuân Diện</td>
                            <td>24 - 11 - 1997</td>
                            <td>Nam</td>
                            <td>User</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_user" id="">DELETE</a>
                            </td>
                        </tr>
                        <tr>
                            <td>nghiatran196@gmail.com</td>
                            <td>Trần Xuân Nghĩa</td>
                            <td>24 - 6 - 1996</td>
                            <td>Nam</td>
                            <td>Admin</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_user" id="">DELETE</a>
                            </td>
                        </tr>
                        <tr>
                            <td>nghiatran196@gmail.com</td>
                            <td>Trần Xuân Nghĩa</td>
                            <td>24 - 6 - 1996</td>
                            <td>Nam</td>
                            <td>Admin</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_user" id="">DELETE</a>
                            </td>
                        </tr>
                        <tr>
                            <td>nghiatran196@gmail.com</td>
                            <td>Trần Xuân Nghĩa</td>
                            <td>24 - 6 - 1996</td>
                            <td>Nam</td>
                            <td>Admin</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_user" id="">DELETE</a>
                            </td>
                        </tr>
                        <tr>
                            <td>nghiatran196@gmail.com</td>
                            <td>Trần Xuân Nghĩa</td>
                            <td>24 - 6 - 1996</td>
                            <td>Nam</td>
                            <td>Admin</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_user" id="">DELETE</a>
                            </td>
                        </tr>
                        <tr>
                            <td>nghiatran196@gmail.com</td>
                            <td>Trần Xuân Nghĩa</td>
                            <td>24 - 6 - 1996</td>
                            <td>Nam</td>
                            <td>Admin</td>
                            <td>
                                <a href="" className="btn btn-sm btn-warning">EDIT</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-sm btn-danger delete_user" id="">DELETE</a>
                            </td>
                        </tr>
                      
                    </table>
                </div>
               
            </div>
        </div>
    </div>
    </div>
)
export default User