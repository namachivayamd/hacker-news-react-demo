import React from "react";
import DocumentTitle from "react-document-title";
import { Form, Input, Button, Checkbox } from "antd";
import { enquireScreen } from "enquire-js";

import Header from "./Header";
// import Banner from './Banner';
// import Page1 from './Page1';
import Page1 from "./Page1";
// import Footer from './Footer';
import "./static/style";

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Login extends React.PureComponent {
  state = {
    isMobile,
  };
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };

    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <DocumentTitle title="Hacker News">
        <div>
          <Header isMobile={this.state.isMobile} />
          <div className="home-wrapper">
            {/* <Banner isMobile={this.state.isMobile} /> */}
            {/* <Page1 isMobile={this.state.isMobile} /> */}
            {/* <Page2 /> */}
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          {/* <Footer /> */}
        </div>
      </DocumentTitle>
    );
  }
}

export default Login;
