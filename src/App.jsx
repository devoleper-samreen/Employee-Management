import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Signup from './components/auth/Signup'
import EmplyeeDashboardPage from './pages/EmplyeeDashboard'
import AdminDashboardpage from './pages/AdminDashboardpage'
import CreateTaskForm from "./components/admin/CreateTaskForm"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path={`/dashboard/employee`} element={<EmplyeeDashboardPage />} />
          <Route path={`/dashboard/admin`} element={<AdminDashboardpage />} />
          <Route path='/create-task' element={<CreateTaskForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
