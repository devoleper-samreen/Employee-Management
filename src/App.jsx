import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import EmplyeeDashboardPage from './pages/EmplyeeDashboard'
import AdminDashboardpage from './pages/AdminDashboardpage'
import CreateTaskForm from "./components/AdminOthers/CreateTaskForm"

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          {/* <Route path='/' element={<EmplyeeDashboardPage />} /> */}
          <Route path='/' element={<AdminDashboardpage />} />
          <Route path='/create-task' element={<CreateTaskForm />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
