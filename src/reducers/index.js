import {combineReducers} from 'redux'

import convert from './convert'

const rootReducer=combineReducers({
    converter: convert
})

export default rootReducer