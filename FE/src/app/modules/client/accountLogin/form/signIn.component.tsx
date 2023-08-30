import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { css } from '@emotion/react';

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};


type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

const SignIn: React.FC = () => (
    <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        css={form}
    >
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
        </Form.Item>

        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button button">
                Đăng nhập
            </Button>

        </Form.Item>
    </Form>
);

export default SignIn;

const form = css`
    .button{
        margin: 30px 0px 10px;        
        border-radius: 4px;
        background: rgb(255, 66, 78);        
        width: 100%;
        color: rgb(255, 255, 255);
        border: none;
        font-size: 15px;        
    }
`

