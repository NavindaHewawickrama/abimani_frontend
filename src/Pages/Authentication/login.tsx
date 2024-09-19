import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Input, Checkbox } from "antd";
import './login.css';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string; password: string }) => {
    setLoading(true);
    axios
      .post('http://localhost:3001/login', { email: values.email, password: values.password })
      .then((result) => {
        console.log(result);
        if (result.data.status === "Success") {
          navigate('/home');
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className='login-container'>
      <div className='form-container'>
        <h2>Login</h2>
        <Form
          style={{ maxWidth: 600 }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
            <a href='#'>Forgot Password?</a>
          </Form.Item>

          

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
