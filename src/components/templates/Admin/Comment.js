import React from 'react'

var listCommentBlock = document.querySelector('list-comment')
var commentApi = 'http://localhost:3000/loaicay'


const Comment = () => (
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
            <div id="nhanxet" className="tab-pane fade in active"><br/><br/><br/><br/><br/>
                  
                    <table className="tb-khosach">
                        <tr>
                            <th>Tên Khách Hàng</th>
                            <th>Tên Sách</th>
                            <th>Ngày Nhận Xét</th>
                            <th>Lời Nhận Xét</th>
                            <th>Action</th>
                        </tr>
                      
                      
                        <tr id="list-comment">
                            <td>Trần Xuân Nghĩa</td>
                            <td>Cây Kim Tiền</td>
                            <td>22 - 03 - 2021</td>
                            <td>Cây đẹp giá rẻ</td>
                            <td>
                                <a href="" className="btn btn-sm btn-danger delete_comment" id="">DELETE</a>
                            </td>
                        </tr>
                       
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
)
export default Comment