import React, { Component } from 'react';
import { Columns, Column } from '../../../somnus'
import cn from 'classnames'
export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowBtns: false
        }
    }

    _showBtns(e) {
        // e.stopPropagation()
        console.log(e);
        // if (!e) return;
        this.setState({
            isShowBtns: true
        })
    }
    _hideBtns(e) {
        console.log(e)
        // e.stopPropagation()
        this.setState({
            isShowBtns: false
        })
    }

    render() {
        const { content, main, priority, completed, completeClick, deleteClick, restartClick } = this.props
        return (
            <div className={cn("todo-item is-clearfix", { 'is-completed': completed })}>
                {/*{this.state.isShowBtns ? (*/}
                <div className="todo-button-group" >
                    {
                        completed ? <span className="todo-button-group-restart" onClick={() => { restartClick && restartClick() }}><i className="mdi mdi-restart"></i></span> :
                            <span className="todo-button-group-complete" onClick={() => { completeClick && completeClick() }}><i className="mdi mdi-check"></i></span>
                    }


                    <span className="todo-button-group-delete" onClick={() => { deleteClick && deleteClick() }}><i className="mdi mdi-delete"></i></span>
                </div>
                {/*) : null}*/}
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