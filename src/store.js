import { createStore } from 'redux'
import counterReduser from './services/reduser/counterReduser'

const store = createStore(counterReduser);

export default store;