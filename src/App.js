import {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodolistPage from './features/TodoListPage/TodolistPage';
import HomePage from './pages/HomePage/index'
import ManageStaff from './pages/ManageStaff/index';
import Welcome from './features/Welcome/welcome'
import UpdateStaff from './features/UpdateStaff/updateStaff';
import ManageDoctor from './pages/ManageDoctor/index';
import UpdateDoctor from './features/UpdateDoctor/updateDoctor';
import ClinicRooom from './features/ClinicRoom/index';
import Patient from './pages/Patient/index'
import ExamHistory from './features/ExamHistory/index'
import {checkTokenAndRefresh} from './utils/jwt'
import Admin from './pages/Admin/index'
import UserManagement from './features/manageUser'
function App() {

  useEffect(() => {
    const tokens = localStorage.getItem('tokens')
    if(tokens){
      const intervalId = setInterval(checkTokenAndRefresh, 180 * 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/todolist" element={<TodolistPage />} />
          <Route path="/manage/staff" element={<ManageStaff />}>
            <Route index element={<Welcome />} />
            <Route  path='update' element={<UpdateStaff />} />
          </Route>
        
          <Route path="/manage/patient" element={<Patient/>}>
            <Route index element={<ExamHistory />} />
            <Route  path='update' element={<UpdateDoctor />} />
            <Route  path='clinic' element={<ClinicRooom />} />
          </Route>

          <Route path="/manage/doctor" element={<ManageDoctor />}>
            <Route index element={<Welcome />} />
            <Route  path='update' element={<UpdateDoctor />} />
            <Route  path='clinic' element={<ClinicRooom />} />
          </Route>

          <Route path="manage/admin" element={<Admin />}>
            <Route index element={<UserManagement />} />
            <Route  path='update' element={<UpdateDoctor />} />
            <Route  path='clinic' element={<ClinicRooom />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;