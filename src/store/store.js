
import {legacy_createStore} from 'redux'
import {rootReducer} from './reducers/rootReducer'

export const store = legacy_createStore(rootReducer)