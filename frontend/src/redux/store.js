import {createStore,combineReducers, applyMiddleware } from 'redux'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer'
import taskReducer from './reducers/taskReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers( {
    user: userReducer,
    project: projectReducer,
    task: taskReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))