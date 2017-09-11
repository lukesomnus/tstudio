import { handleActions } from 'redux-actions';
import { add_todo_success } from '../actions/Todo'

const intialState = {
    todos: [],
    selectedPriority: 'all',
    inputVal: ''
}

export default handleActions({
    [add_todo_success](state, { payload }) {
        return { ...state, ...payload }
    }
})