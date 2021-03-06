import { combineReducers } from 'redux';

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return [...state, todo(undefined, action)]
        }
        case 'COMPLETE_TODO': {
            return state.map(to => todo(to, action))
        }
        default: {
            return state;
        }
    }
}


const todo = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                id: action.id,
                description: action.description,
                completed: false
            }
        }
        case 'COMPLETE_TODO': {
            if (state.id !== action.id) {
                return state;
            } else {
                return {
                    // mantener los detalles
                    ...state,
                    completed: !state.completed
                }
            }
        }
        default: {
            return state;
        }
    }
}

const todosReducer = combineReducers({
    todos,
    todo
})

export default todosReducer;

export const getTodos = state => state;
export const getTodo = (state, index) => state[index];