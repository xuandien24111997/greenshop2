import React from 'react'
const Admin = () => (
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
            <div id="admin-page" className="tab-pane fade in active ">
                    <div className="text-center">
                        <br/><br/><br/>
                        <img src=" ./public_html/img/logo.png" />
                        <h1 >
                            Đây là trang quản lý.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)
export default Admin