import React from 'react';
import { Columns, Column} from '../../../somnus'
export default function ({ content, main, priority }) {

    return (
        <div className="todo-item is-clearfix">
            <div className="todo-content">
                <div className="todo-content-main">
                    萨达实打实大所大哈开始的卡萨丁哈实打实的哈市客户端
                </div>
                {/* <div className="todo-content-comment">
                    
                </div> */}
            </div>
            <div className="todo-button-group">
                <span className="todo-button-group-complete"><i className="mdi mdi-check"></i></span>
                <span className="todo-button-group-delete"><i className="mdi mdi-delete"></i></span>
            </div>
        </div>
    )
}