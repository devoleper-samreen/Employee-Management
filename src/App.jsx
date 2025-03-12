import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Signup from './components/auth/Signup'
import EmplyeeDashboardPage from './pages/EmplyeeDashboard'
import AdminDashboardpage from './pages/AdminDashboardpage'
import CreateTaskForm from "./components/admin/CreateTaskForm"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/employee-dashboard' element={<EmplyeeDashboardPage />} />
        <Route path='/admin-dashboard' element={<AdminDashboardpage />} />
        <Route path='/create-task' element={<CreateTaskForm />} />
      </Routes>
    </Router>
  )
}

export default App
