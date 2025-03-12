import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import EmplyeeDashboardPage from './pages/EmplyeeDashboard'
import AdminDashboardpage from './pages/AdminDashboardpage'
import CreateTaskForm from "./components/AdminOthers/CreateTaskForm"
import { useEffect } from 'react'
import { getAuthData, setAuthData } from './utils/authLocalStorage'

function App() {
  useEffect(
    () => {
      setAuthData();
      getAuthData()
    }, []
  )

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/employee-dashboard' element={<EmplyeeDashboardPage />} />
          <Route path='/admin-dashboard' element={<AdminDashboardpage />} />
          <Route path='/create-task' element={<CreateTaskForm />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
