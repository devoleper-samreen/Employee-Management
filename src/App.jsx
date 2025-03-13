import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import SignupPage from './pages/Signup'
import EmplyeeDashboardPage from './pages/EmplyeeDashboard'
import AdminDashboardpage from './pages/AdminDashboardpage'
import CreateTaskForm from "./components/admin/CreateTaskForm"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./protected/ProtectedRoute"
import HomePage from "./pages/Home"

function App() {

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Router>
        <Routes>
          {/* public route */}
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignupPage />} />

          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path={`/dashboard/employee`} element={<EmplyeeDashboardPage />} />
            <Route path={`/dashboard/admin`} element={<AdminDashboardpage />} />
            <Route path='/create-task' element={<CreateTaskForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
