import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="footer_link">
                        <a href="#">關於我們</a>
                        <a href="/restaurant/login">商家入口</a>
                        <a href="#">常見問題</a>
                        <a href="#">聯絡我們</a>
                    </div>
                    <div className="footer_text">
                        <p>Copyright &copy; 2022 FoodCrossesRoads.All Rights Reserved.</p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;