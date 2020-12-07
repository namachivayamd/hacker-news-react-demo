import React from "react";
import { Row, Col, Icon, Menu, Button, Popover } from "antd";
import { Link } from "react-router-dom";
import { enquireScreen } from "enquire-js";

const LOGO_URL = "https://news.ycombinator.com/y18.gif";

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: "horizontal",
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? "inline" : "horizontal" });
    });
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="home">
          <a>Home</a>
        </Menu.Item>
        <Menu.Item key="new">
          <a>New</a>
        </Menu.Item>
        <Menu.Item key="jobs">
          <a>Jobs</a>
        </Menu.Item>
        <Menu.Item key="profile">
          <a>Profile</a>
        </Menu.Item>
        <Menu.Item key="profile">
          <a>Submit</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div id="header" className="header">
        {menuMode === "inline" ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>Hacker News</span>
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              <div id="preview">
                <Link to="/home">
                  <Button icon="eye-o">Logout</Button>
                </Link>
              </div>
              {menuMode === "horizontal" ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
