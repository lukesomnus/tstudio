import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Columns, Column, Input, Field, Dropdown, Button } from '../../../somnus'
import './todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            selectedPriority: 'all',
            inputVal: ''
        }
    }

    todoTypes = [
        {
            text: '重要但不紧急',
            class: 'primary'
        }
    ]

    _addTodo() {

    }

    _toggleTodo() {

    }

    _deleteTodo() {

    }

    _selectPriority(){

    }
    render() {
        const items = [{
            id:'1',
            name:'重要'
        },
        {
            id:'2',
            name:'重要但不紧急'
        },
        {
            id:'3',
            name:'重要但不紧急'
        },{
            id:'4',
            name:'重要但不紧急'
        }]
        return (
            <div>
                <div className="todo-input-area">
                    <Field className="has-addons has-addons-centered">
                        <div className="control">
                            <Dropdown items={items} placeholder="Prioirty" onSelect={this._selectPriority}>
                                
                            </Dropdown>
                            {/* <span className="select">
                                <select>
                                    <option>重要</option>
                                    <option>重要但不紧急</option>
                                    <option>€</option>
                                </select>
                            </span> */}
                        </div>
                        <div className="control ">
                            <Input className="todo-input" placeholder="写下你即将做的任务吧~"></Input>
                        </div>
                        <div>
                            <Button color="primary" className="todo-input-btn">Add</Button>
                        </div>
                    </Field>
                </div>

                <Columns className="todo-container">
                    <Column span="3" className="todo-group is-primary">
                        <div className="todo-header">
                            <span>重要</span>
                        </div>
                        <TodoItem>
                        </TodoItem>
                        <TodoItem>
                        </TodoItem>
                        <TodoItem>
                        </TodoItem>
                    </Column>
                    <Column span="3" className="todo-group is-info">
                        <div className="todo-header">
                            <span>重要</span>
                        </div>
                        <TodoItem>
                        </TodoItem>
                    </Column>
                    <Column span="3" className="todo-group is-warning">
                        <div className="todo-header">
                            <span>重要</span>
                        </div>
                        <TodoItem>
                        </TodoItem>
                    </Column>
                    <Column span="3" className="todo-group is-error">
                        <div className="todo-header">
                            <span>重要</span>
                        </div>
                        <TodoItem>
                        </TodoItem>
                    </Column>
                    {/* <div className="add-todo-button">
                    <i className="mdi mdi-plus"></i>
                </div>
                <div className="todo-input-container">
                    <Field>
                        <div className="control">
                            <textarea rows="2" className="textarea" placeholder="Todo 内容"></textarea>
                              <Dropdown items={items}>

                              </Dropdown>
                        </div>
                    </Field>
                </div> */}
                </Columns>
            </div>
        )
    }
}