import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer'
import { categoryReducer } from './categoryReducer'
import { completeReducer } from './completeReducer'
import { publishReducer } from './publishReducer'

const rootReducer = combineReducers({
    loginReducer,
    categoryReducer,
    completeReducer,
    publishReducer
})

export default rootReducer;