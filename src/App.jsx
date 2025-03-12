import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Signup from './components/auth/Signup'
import EmplyeeDashboardPage from './pages/EmplyeeDashboard'
import AdminDashboardpage from './pages/AdminDashboardpage'
import CreateTaskForm from "./components/admin/CreateTaskForm"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./protected/ProtectedRoute"

function App() {

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Router>
        <Routes>
          {/* public route */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path={`/dashboard/employee`} element={<EmplyeeDashboardPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path={`/dashboard/admin`} element={<AdminDashboardpage />} />
            <Route path='/create-task' element={<CreateTaskForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
