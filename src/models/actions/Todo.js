import { createAction } from 'redux-actions';
import store from 'store';
import uuid from 'uuid';

export const add_todo_success = createAction('add/todo/success');

export const addTodo = (text, priority, deadline, cycle) => {
    const data = {
        id: uuid(),
        text,
        priority,
        deadline,
        cycle
    }
    return dispatch => {
        const todos = store.get('todos')
        if (todos && todos.length > 0) {
            todos.push(data)
        } else {
            todos = [data]
        }
        store.set('todos', todos);
        dispatch(add_todo_success(todos))
    }
}