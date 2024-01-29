import { GET_ARTIST } from "../actions/actions";

export default function artistReducer(state=[], action) {
    switch(action.type){
        case GET_ARTIST:
            return [action.payload]
        default:
            break;
    }
    return state
}
