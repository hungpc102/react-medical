import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodolistPage from './features/TodoListPage/TodolistPage';
import HomePage from './pages/HomePage/index'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/todolist" element={<TodolistPage />} />
        </Routes>
    </Router>
  );
}

export default App;