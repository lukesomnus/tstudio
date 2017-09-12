import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Columns, Column } from '../../../somnus'
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

    render() {
        return (
            <Columns>
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
            </Columns>
        )
    }
}