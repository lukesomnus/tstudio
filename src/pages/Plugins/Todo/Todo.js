import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Columns, Column, Input, Field, Dropdown, Button } from '../../../somnus'
import './todo.css'
import uuid from 'uuid';
import store from 'store';
import cn from 'classnames';

const LOCAL_TODO = 'LOCAL_TODO';
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this._getAllTodos(),
            selectedPriority: 1,
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
        const todos = this._getAllTodos();
        todos.push({
            id: uuid(),
            text: this.state.inputVal,
            completed: false,
            priority: this.state.selectedPriority
        })
        store.set(LOCAL_TODO, todos);
        this.setState({
            todos
        })
        this._initTodo();
    }

    _initTodo() {
        this.setState({
            inputVal: ''
        })
    }
    _toggleTodo(id) {
        const newTodos = this.state.todos.map(item => {
            if (item.id == id) {
                item.completed = !item.completed
            }
            return item;
        })
        this.setState({
            todos: newTodos
        })
        store.set(LOCAL_TODO, newTodos);
        console.log(newTodos)
    }

    _deleteTodo(id) {
        const newTodos = this.state.todos.filter(todo => todo.id != id);
        this.setState({
            todos: newTodos
        })
        store.set(LOCAL_TODO, newTodos);
    }

    _getAllTodos() {
        return store.get(LOCAL_TODO) || [];
    }

    priorityTodoShow(priority) {
        return this.state.todos.filter(todo => todo.priority === priority);
    }

    _selectPriority(item) {
        this.setState({
            selectedPriority: item.priority
        })
    }
    _inputTodoChange(val) {
        this.setState({ inputVal: val })

    }
    render() {
        const items = [{
            id: '1',
            priority: 1,
            classname: 'primary',
            name: '不重要且不紧急'
        },
        {
            id: '2',
            priority: 2,
            classname: 'info',
            name: '重要但不紧急'
        },
        {
            id: '3',
            priority: 3,
            classname: 'warning',
            name: '重要但不紧急'
        }, {
            id: '4',
            priority: 4,
            classname: 'error',
            name: '重要且紧急'
        }]
        const {inputVal} = this.state
        return (
            <div>
                <div className="todo-input-area">
                    <Field className="has-addons has-addons-centered">
                        <div className="control">
                            <Dropdown items={items} placeholder="重要但不紧急" onSelect={(item) => (this._selectPriority(item))}>
                            </Dropdown>
                        </div>
                        <div className="control ">
                            <Input className="todo-input" placeholder="写下你即将做的任务吧~" value={inputVal} onChange={val => { this._inputTodoChange(val) }}></Input>
                        </div>
                        <div>
                            <Button color="primary" className="todo-input-btn" onClick={() => { this._addTodo() }}>Add</Button>
                        </div>
                    </Field>
                </div>


                <Columns className="todo-container">
                    {
                        items.map(item => (
                            <Column span="3" className={`todo-group is-${item.classname}`}>
                                <div className="todo-header">
                                    <span>{item.name}</span>
                                </div>
                                {
                                    this.priorityTodoShow(item.priority).map(item => (
                                        <TodoItem
                                            key={item.id}
                                            content={item.text}
                                            completed={item.completed}
                                            completeClick={() => { this._toggleTodo(item.id) }}
                                            restartClick={() => { this._toggleTodo(item.id) }}
                                            deleteClick={() => { this._deleteTodo(item.id) }}
                                        >
                                        </TodoItem>
                                    ))
                                }
                            </Column>
                        ))
                    }
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