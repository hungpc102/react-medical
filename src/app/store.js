// import {createStore} from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store


import {configureStore} from '@reduxjs/toolkit'
import filtersSlice from "../features/TodoListPage/Filters/filtersSlice"
import todoListSlice from "../features/TodoListPage/TodoList/todoListSlice"
import signUpSlice from "../features/Access/SingUp/signUpSilce"
import loginSlice from "../features/Access/Login/loginSlice"
import updateStaffSlice from "../features/UpdateStaff/FormUpdateStaff/formUpdateSlice"
import showStaffSlice from "../features/UpdateStaff/ShowStaff/showStaffSlice"
import updateDoctorSlice from "../features/UpdateDoctor/FormUpdateDoctor/formUpdateSlice"
import showDoctorSlice from "../features/UpdateDoctor/ShowDoctor/showDoctorSlice"
import createRecordSlice from "../features/Welcome/CreateMedicalRecord/createRecordSlice"
import listRecordSlice from "../features/Welcome/ListMedicalRecord/listRecordSlice"
import getClinicSlice from "../features/ClinicRoom/getClinicSlice"
import addRecordToWaitingRoomSlice from "../features/Welcome/CreateMedicalRecord/addRecordToWaitingRoomSlice"
import logoutSlice from '../features/Access/Logout/logoutSlice'
import updateClinicSlice from '../features/ClinicRoom/updateClinicSlice'
import createResultSlice from '../features/ClinicRoom/createResultSlice'
import getResultSlice from '../features/ExamHistory/detailResultSlice'
import getAllUserSlice from '../features/manageUser/getAllUserSlice'
import deleteUserSlice from '../features/manageUser/deleteUserSlice'
import updateStatusSlice from '../features/manageUser/statusUserSlice'

const store = configureStore({
    reducer:{
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
        signUp: signUpSlice,
        login: loginSlice,
        updateStaff: updateStaffSlice,
        showStaff: showStaffSlice,
        updateDoctor: updateDoctorSlice,
        showDoctor: showDoctorSlice,
        createRecord: createRecordSlice,
        listRecord:listRecordSlice,
        getClinic: getClinicSlice,
        addRecordToWaitingRoom: addRecordToWaitingRoomSlice,
        logout: logoutSlice,
        updateClinic: updateClinicSlice,
        createResult: createResultSlice,
        getResult: getResultSlice,
        getAllUser:getAllUserSlice,
        deleteUser: deleteUserSlice,
        updateStatus: updateStatusSlice,
    }
})

export default store