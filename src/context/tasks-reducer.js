import {
    GET_LISTS, TOGGLE_LIST_MENU, SELECT_LIST, CREATE_LIST, UPDATE_LIST, DELETE_LIST,
    GET_TASKS, SHOW_COMPLETED, CREATE_TASK, UPDATE_TASK, DELETE_TASK, COMPLETE_TASK
} from './tasks-actions'

const tasksReducer = (state, action) => {
    switch (action.type){
        //Lists
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload
            }
        case TOGGLE_LIST_MENU:
            return {
                ...state,
                isVisible: !state.isVisible
            }
        case SELECT_LIST:
            return {
                ...state,
                listIdValue: action.payload
            }
        case CREATE_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }
        case UPDATE_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }
        case DELETE_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }

        //Tasks
        case  GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case  SHOW_COMPLETED:
            return {
                ...state,
                isVisibleCompleted2: !state.isVisibleCompleted2
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        default:
            return state
    }
}

export default tasksReducer