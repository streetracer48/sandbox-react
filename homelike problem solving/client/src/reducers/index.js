import {combineReducers} from 'redux'
import user from './user'
import apartment from './aprtments'

const rootReducer = combineReducers({
     user,
     apartment
});

export default rootReducer