import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { css } from '@emotion/react';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

const SignIn: React.FC = () => (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        css={form}
    >
        <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
                { required: true, message: 'Please input your email!' },
                { type: "email", message: "Invalid email format" }
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: "Password must be at least 6 characters" }
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className='button'>
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