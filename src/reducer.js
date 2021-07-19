export default function(state, action) {
    switch(action){
        case 'showList': 
            return !state
        default:
            return false
    }
}