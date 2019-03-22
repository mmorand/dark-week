import { DAWN, DUSK, NO_GAME } from "config/constants"

export const CHANGE_PHASE = 'CHANGE_PHASE'
export function changePhase(newPhase) {
  return {
    type: CHANGE_PHASE,
    payload: {
      newPhase
    }
  }
}

export function getNextPhase(phase) {
  switch(phase) {
    case NO_GAME:
      return DAWN
    case DAWN:
      return DUSK
    case DUSK:
      return DAWN
    default:
      return phase
  }
}