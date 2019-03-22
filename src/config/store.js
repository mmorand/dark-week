import { combineReducers, createStore } from 'redux'
import { boardReducer } from 'board'

const rootReducer = combineReducers({
  boardReducer,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
