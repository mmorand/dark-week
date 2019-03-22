const subState = (state) => state.boardReducer
export const getPhase = (state) => subState(state).phase
