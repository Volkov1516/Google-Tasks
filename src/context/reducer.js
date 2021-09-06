import {
    GET_LISTS, SET_INITIAL_LIST, SELECT_LIST, CREATE_LIST, DELETE_LIST,
    GET_TASKS, CREATE_TASK, DELETE_TASK, COMPLETE_TASK
} from './actions'

const tasksReducer = (state, action) => {
    switch (action.type) {
        //Lists
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload
            }
        case SET_INITIAL_LIST:
            return {
                ...state,
                listIdValue: action.payloadId,
                activeListTitle: action.payloadTitle
            }
        case CREATE_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }
        case DELETE_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            }
        case SELECT_LIST:
            return {
                ...state,
                listIdValue: action.payloadId,
                activeListTitle: action.payloadTitle
            }
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
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