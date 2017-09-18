import React, { Component } from 'react';
import { Columns, Column } from '../../../somnus'
export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowBtns: false
        }
    }

    _showBtns(e) {
        e.stopPropagation()
        console.log(e);
        // if (!e) return;
        this.setState({
            isShowBtns: true
        })
    }
    _hideBtns(e) {
        e.stopPropagation()
        this.setState({
            isShowBtns: false
        })
    }

    render() {
        const { content, main, priority, completeClick, deleteClick, restartClick } = this.props
        return (
            <div className="todo-item is-clearfix" onMou={(e) => { this._showBtns(e) }} onMouseOutCapture={(e) => { this._hideBtns(e) }} >
                {/* {this.state.isShowBtns ? ( */}
                <div className="todo-button-group" onMouseOverCapture={e => e.stopPropagation()} onMouseOutCapture={e => e.stopPropagation()} >
                    <span className="todo-button-group-complete" onClick={() => { completeClick && completeClick() }}><i className="mdi mdi-check"></i></span>
                    <span className="todo-button-group-delete" onClikc={() => { deleteClick && deleteClick() }}><i className="mdi mdi-delete"></i></span>
                    <span className="todo-button-group-restart" onClikc={() => { restartClick && restartClick() }}><i className="mdi mdi-restart"></i></span>
                </div>
                {/* ) : null} */}
                <div className="todo-content">
                    <div className="todo-content-main" onTouchStart={(e) => { this._toggleShowBtns(e) }} >
                        {content}
                    </div>
                    {/* <div className="todo-content-comment">
                        
                    </div> */}
                </div>

            </div>
        )
    }
}