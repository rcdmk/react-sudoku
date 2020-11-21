import reducer from 'reducers'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

function configureStore(initialState = {}) {
  return createStore(reducer, initialState, devToolsEnhancer({}))
}

export default configureStore
