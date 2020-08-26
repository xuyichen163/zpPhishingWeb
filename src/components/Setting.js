import React, { Component } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: { span: 5, },
    wrapperCol: { span: 14, },
};
class Setting extends Component {
    render() {
        const onFinish = values => {
            console.log(values);
        };
        const onClick = values => {
            alert("提交成功");
            
        }
        return (
            <Form {...layout} name="nest-messages" onFinish={onFinish}>
                <Form.Item label="黑白名单来源网址">
                    <Input />
                </Form.Item>
                {/* <Form.Item label="Email" >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item> */}
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                    <Button type="primary" htmlType="submit" onClick={onClick}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Setting;