// import {createStore} from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store


import filtersSlice from "../features/TodoListPage/Filters/filtersSlice"
import todoListSlice from "../features/TodoListPage/TodoList/todoListSlice"
import signUpSlice from "../features/Access/SingUp/signUpSilce"
import loginSlice from "../features/Access/Login/loginSlice"

import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
        signUp: signUpSlice,
        login: loginSlice
    }
})

export default store