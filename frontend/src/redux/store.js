import {createStore,combineReducers, applyMiddleware } from 'redux'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers( {
    user: userReducer,
    project: projectReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))