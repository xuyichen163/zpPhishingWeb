import React, { Component } from 'react';
import { Alert } from 'antd';

class AlertDemo extends Component {
    state = {}
    render() {
        return (
            <>
                <Alert
                    message="Success Tips"
                    description="Detailed description and advice about successful copywriting."
                    type="success"
                    showIcon
                    closable
                />
               
                <Alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                    closable
                />
               
            </>
         );
    }
}

export default AlertDemo;