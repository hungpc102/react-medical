import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodolistPage from './features/TodoListPage/TodolistPage';
import HomePage from './pages/HomePage/index'
import ClinicManage from './pages/ClinicManageStaff/index';
import Welcome from './features/Welcome/welcome'
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/todolist" element={<TodolistPage />} />
          <Route path="/clinic-manage-staff" element={<ClinicManage />}>
            <Route index element={<Welcome />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;