import { NO_GAME } from 'config/constants'
import { CHANGE_PHASE } from "board/state/actions";

const initialState = {
  phase: NO_GAME
}

export function boardReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_PHASE:
      return {
        ...state,
        phase: action.payload.newPhase
      }
    default:
      return state
  }
}