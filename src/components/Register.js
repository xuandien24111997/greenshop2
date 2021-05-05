import React from 'react'
import Header from './templates/Home/Header'
import Footer from './templates/Home/Footer'

const Register = () =>(

    <div className="container">
        <Header />
        <div>
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
            <div className="dangki-left">
                <div className="left-title">
                    <div className="gachchan t-centert">
                        <h3>ĐĂNG KÍ TÀI KHOẢN</h3>
                    </div>
                </div>

                <div>
                <form action="#" method="POST"  className="form-horizontal">
                    
                    <div className="form-group">
                        <label for="text">Họ và tên</label>
                        <input type="text" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Tên đăng nhập</label>
                        <input type="text" className="form-control" id="pwd"/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Nhập mật khẩu</label>
                        <input type="password" className="form-control" id="pwd" minLength="9" maxLength="11" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Ngày sinh</label>
                        <input type="date" name="birthday" className="form-control" placeholder="yyyy - mmmm - dddd" autocomplete="off"/><br/>
                    </div>
                        <button type="submit" name="register" className="btn btn-primary btn-block" value="ĐĂNG KÍ">ĐĂNG KÍ</button>
                    </form>
                </div>
            </div>
        </div>

            <div className="col-sm-4">
              
                <div className="col-sm-12">
                    <br/>
                    <a href=""><img src="" className="img-dangki"/></a>
                    <br/>
                </div>
                <div className="col-sm-12">
                    <a href=""><img src="" className="img-dangki"/></a>
                </div>
            </div>

        </div>
       
      
        <Footer />
</div>
)
export default Register


