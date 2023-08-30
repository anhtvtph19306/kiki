import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    name?: string;
    phoneNumber?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

const SignUp: React.FC = () => (
    <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        css={form}
    >
        <Form.Item<FieldType>

            name="name"
            rules={[
                { required: true, message: 'Please input your Name!' },
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item<FieldType>

            name="phoneNumber"
            rules={[
                { required: true, message: 'Please input your phoneNumber!' },
                { min: 6, max: 12, message: 'Invalid phoneNumber format!' }
            ]}
        >
            <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="PhoneNumber" />
        </Form.Item>

        <Form.Item<FieldType>

            name="email"
            rules={[
                { required: true, message: 'Please input your email!' },
                { type: "email", message: "Invalid email format" }
            ]}
        >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item<FieldType>

            name="password"
            rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: "Password must be at least 6 characters" }
            ]}
        >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
        </Form.Item>

        <Form.Item<FieldType>

            name="confirmPassword"
            dependencies={["password"]}
            rules={[
                { required: true, message: "Confirm password is required" },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                        } else {
                            return Promise.reject(
                                new Error("Confirm password does not match")
                            );
                        }
                    },
                }),
            ]}
        >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
            />
        </Form.Item>

        <Form.Item >
            <Button type="primary" htmlType="submit" className="login-form-button button">
                Đăng ký
            </Button>
        </Form.Item>
    </Form>
);

export default SignUp;
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