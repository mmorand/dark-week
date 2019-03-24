const subState = (state) => state.phaseReducer
export const getPhase = (state) => subState(state).phase
