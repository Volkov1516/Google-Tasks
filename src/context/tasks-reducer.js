import {TOGGLE_LIST_MENU, SELECT_LIST, CREATE_LIST, UPDATE_LIST, DELETE_LIST} from './tasks-actions'

const tasksReducer = (state, action) => {
    switch (action.type){
        case TOGGLE_LIST_MENU:
            return {
                isVisible: !state.isVisible
            }
        case SELECT_LIST:
            return {}
        case CREATE_LIST:
            return {}
        case UPDATE_LIST:
            return {}
        case DELETE_LIST:
            return {}
        default:
            return state
    }
}

export default tasksReducer