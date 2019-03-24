import { combineReducers, createStore } from 'redux'
import { phaseReducer } from 'phase'

const rootReducer = combineReducers({
  phaseReducer,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
