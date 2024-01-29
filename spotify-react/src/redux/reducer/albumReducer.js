import { GET_ALBUM } from "../actions/actions";

export default function albumReducer(state=[], action) {
    switch(action.type){
        case GET_ALBUM:
            return [action.payload]
        default:
            break;
    }
    return state
}
