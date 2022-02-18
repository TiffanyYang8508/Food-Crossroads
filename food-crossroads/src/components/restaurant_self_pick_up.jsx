import React, { Component } from 'react';
import "../fontawesome-free-5.15.4-web/css/all.css";
import "../css/style.css";
import "../css/restaurant_self_pick_up.css"

class Restaurant_self_pick_up extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <aside>
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">預位管理</a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_today_booking.html">今日訂位</a>
                                </div>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_booking_history.html">歷史訂位紀錄</a>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">訂位管理</a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse in">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_today_booking.html">今日自取訂餐</a>
                                </div>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse in">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_history_list.html">歷史訂餐紀錄</a>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">搜尋</a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse in">

                                <form class="sreach_form">
                                    <div class="form-group row form_textbox">
                                        <label for="booker" class="col-4 col-form-label"></label>
                                        <div class="col-10">
                                            <input id="booker" name="booker" placeholder="訂位人" type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row form_textbox">
                                        <label for=" booking_number" class="col-4 col-form-label"></label>
                                        <div class="col-10">
                                            <input id=" booking_number" name=" booking_number" placeholder="訂位編號" type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row form_textbox">
                                        <label for=" booking_date" class="col-4 col-form-label"></label>
                                        <div class="col-10">
                                            <input id=" booking_date" name=" booking_date" placeholder="訂位日期" type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row form_textbox">
                                        <label for="booker_phone" class="col-4 col-form-label"></label>
                                        <div class="col-10">
                                            <input id="booker_phone" name="booker_phone" placeholder="手機" type="text" class="form-control" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </aside>

                <div class="container">
                    <table class="table order_table">
                        <thead>
                            <tr>
                                <th>已完成</th>
                                <th>取餐編號</th>
                                <th>取餐日期</th>
                                <th>訂餐姓名</th>
                                <th>訂餐金額</th>
                                <th>手機</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" style={{width: "20px", height: "20px", marginLeft: "15px"}} />
                                        </label>
                                    </div>
                                </td>
                                <td>00001</td>
                                <td>16:30</td>
                                <td>郭美美</td>
                                <td>260</td>
                                <td>09001993412</td>
                                <td>
                                    <button class="btn btn-sm btn-dark detail_btn" data-toggle="modal" data-target="#detailModal"
                                        style={{marginleft: "35px"}}>
                                        訂餐明細
                                    </button>
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-dark detail_btn" data-toggle="modal" data-target="#detailModal"
                                        style={{marginleft: "-50px"}}>
                                        取消
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" style={{width: "20px", height: "20px", marginLeft: "15px"}} checked />
                                        </label>
                                    </div>
                                </td>
                                <td>00001</td>
                                <td>16:30</td>
                                <td>郭美美</td>
                                <td>260</td>
                                <td>09001993412</td>
                                <td>
                                    <button class="btn btn-sm btn-dark detail_btn" data-toggle="modal" data-target="#detailModal"
                                        style={{marginleft: "35px"}}>
                                        訂餐明細
                                    </button>
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-dark detail_btn" data-toggle="modal" data-target="#detailModal"
                                        style={{marginleft: "-50px"}}>
                                        取消
                                    </button>
                                </td>
                            </tr>

                            
                            <div class="modal fade" id="detailModal">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        
                                        <div class="modal-header">
                                            <h4 class="modal-title">訂單明細</h4>
                                            <button type="button" class="close" data-dismiss="modal"></button>
                                        </div>

                                        
                                        <div class="detail_modal_body">
                                            姓名：李曉明 <br />
                                            手機：0900-xxxxxx<br />
                                            電子郵件：email@gmail.com <br />
                                            <br />
                                            訂位編號：00001 <br />
                                            訂位人數：3人 <br />
                                            訂位日期：2022/02/02 <br />
                                            取位時間：17:30 <br />
                                            備註：需要兒童座椅
                                        </div>

                                       
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-lg btn-secondary" data-dismiss="modal">
                                                返回
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default Restaurant_self_pick_up;