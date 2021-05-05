import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GreenShop from './GreenShop'

class DetailPro extends React.Component {


  state = {
    fullname: '',
    comment: ''
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const Data = {
      fullname: this.state.fullname,
      comment: this.state.comment
    }

    GreenShop.post('/comments.json', Data).then(response => {
      console.log(response);
    })
  };

  render() {
    return (
      <div className="content-detail">
        <br /><br />
        <div className="container">
          <div className="content1">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <img src="./public_html/img/CayKimTien.jpg" className="img-responsive" />
              </div>
              <div className="col-sm-5 col-xs-12">
                <div>
                  <br /><br />
                  <span className="tensach">Tên cây : Cây Kim Tiền </span><br /><br />
                  <span className="gia"> Giá bán : 100.000 VNĐ</span><br /><br />
                </div>
                <div>
                  <Link to="/cart"> CHỌN MUA <i className="fas fa-cart-plus"></i> <br /><br /></Link><hr />

                  <span className="glyphicon "><i className="fas fa-comments"></i> Thêm nhận xét của bạn</span>
                  <div id="" className="" >
                    <form autoComplete="off" onSubmit={this.handleFormSubmit} >
                      <div class="form-group">
                        <input type="text" class="form-control"

                          value={this.state.fullname}
                          onChange={(e) => this.setState({ fullname: e.target.value })}
                          placeholder="Enter full name" />
                      </div>
                      <div class="form-group">
                        <textarea rows="5" cols="62" name="comment"

                          value={this.state.comment}
                          onChange={(e) => this.setState({ comment: e.target.value })}

                          placeholder="Enter Comment" class="form-control" >
                        </textarea>
                      </div>
                      <button type="submit" class="btn btn-success"  >Submit</button>
                    </form>
                  </div>
                </div>

              </div>
              <div className="col-sm-3 col-right hidden-xs">
                <div className="bangchitiet">
                  <div className="thongtinkhac">
                    <h2>Thông tin chi tiết về cây.</h2>
                  </div>
                  <>
                  <table>
                    <tr>
                      <th>Mã sản phẩm : </th> <hr />
                      <td> 312312412</td>
                    </tr>
                    <tr>
                      <th>Tên nhà cung cấp : </th> <hr />
                      <td> Công ty 1 thành viên</td>
                    </tr>
                    <tr>
                      <th>Tháng tuổi : </th> <hr />
                      <td>12 tháng</td>
                    </tr>

                    <tr>
                      <th>Kích thước : </th> <hr />
                      <td> 20 cm</td>
                    </tr>

                    <tr>
                      <th>Hình thức : </th> <hr />
                      <td> Cây trang trí </td>
                    </tr>

                  </table>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div><br /><br />
        <div className="container">
          <h3> phan nhan xet cua moi nguoi</h3>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col"> Name  </th>
                <th scope="col">Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> 1</th>
                <td> ABC</td>
                <td>Otto</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default DetailPro
