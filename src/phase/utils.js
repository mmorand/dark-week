import { DAWN, DUSK, NO_GAME } from "config/constants"

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