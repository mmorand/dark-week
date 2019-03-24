export const CHANGE_PHASE = 'CHANGE_PHASE'
export function changePhase(newPhase) {
  return {
    type: CHANGE_PHASE,
    payload: {
      newPhase
    }
  }
}
