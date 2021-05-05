import React from 'react'
import { Link } from 'react-router-dom'


function Loigin(props) {
  const { email, setEmail, password, setPassword, handleLogin, handleSignup, setHasAccount, hasAccount, emailError, passwordError, } = props;

  return (
    <div id="login " className="container">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <section>
          <div className="input-group">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-envelope"></span>
            </div>
            <input id="emailid" type="email" name="email" autoFocus value={email} 
            onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập địa chỉ email của bạn" className="form-control" autosave="false" />
          </div>
          <p> {emailError} </p>
          <br />
          <div className="input-group">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-lock"></span>
            </div>
            <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu" className="form-control" autoComplete={false}/>
          </div>
          <p> {Error} </p><br />
          <div >
            {hasAccount ? (
              <>
                <div className="button">
                  <button type="submit" className="btn btn-success btn-block" onClick={handleLogin}>ĐĂNG NHẬP</button>
                </div><br />
                <p>Chưa có tài khoản vui lòng   " <span onClick={() => setHasAccount(!hasAccount)}>ĐĂNG KÍ </span> " </p>
              </>
            ) : (
              <>
                <div className="button">
                  <button type="submit" className="btn btn-primary btn-block" onClick={handleSignup}>ĐĂNG KÍ</button>
                </div><br />
                <p>Chưa có tài khoản vui lòng   " <span onClick={() => setHasAccount(!hasAccount)}> ĐĂNG NHẬP</span>"</p>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  )


}

export default Loigin
