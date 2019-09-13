import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Modal, Button, Checkbox, Card, message } from 'antd';
import './login.css';

class NormalLoginForm extends React.Component {
  // Modal
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  // Reset Password
  handleSend = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  // Login
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.loading('Logging in...', 2.0)
        .then(() => {
          message.success('You are logged in', 1.0);
          console.log('Received values of form: ', values);
        })
      }
    });
  };

  render() {
    // Modal
    const { visible, loading } = this.state;

    // Login
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Container">
        {/* modal */}
        <Modal
          visible={visible}
          title="Forgot Password"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="send" type="primary" loading={loading} onClick={this.handleOk}>
              Send
            </Button>,
          ]}
        >
          <Form onSend={this.handleSend} className="reset-password">
            <p>Enter your email and we'll send you a link get back into your account.</p>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input placeholder="Your Email" />)}
            </Form.Item>
          </Form>
        </Modal>

        {/* Login */}
        <Card style={{ textAlign: 'center' }}>
          <h1> Login </h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <Button type="link" onClick={this.showModal}>
                Forgot Password 
              </Button>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <Link to='/register'> register now! </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;