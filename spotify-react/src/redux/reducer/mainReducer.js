import { ROCK_CLASSICS, POP_CULTURE, HIP_HOP } from "../../components/HomePageComponent"
import { SEARCH, TO_EMPTY } from "../actions/actions"


export default function mainReducer(state={}, action) {
  switch(action.type){
    case SEARCH:
        return ({
          ...state,
          search: [action.payload]
        })
    case ROCK_CLASSICS:
      return({
        ...state,
        rockClassics: [...state.rockClassics, action.payload]
      })
    case POP_CULTURE:
      return({
        ...state,
        popCulture: [...state.popCulture, action.payload]
      })
    case HIP_HOP:
      return({
        ...state,
        hipHop: [...state.hipHop, action.payload]
      })
    case TO_EMPTY:
      return({
        ...state,
        rockClassics: [],
        popCulture: [],
        hipHop: []
      })
    default:
      break;
  }
  return state
}
