import React, { Component } from 'react';
import img from "../images/module.png"

class ModuleShow extends Component {
    state = {}
    render() {
        return (
            <div className="imgBox">
                <img alt={"图片不存在"} src={img} height={"800px"} />
            </div>
        );
    }
}

export default ModuleShow;
