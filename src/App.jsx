import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import EmplyeeDashboardPage from './pages/EmplyeeDashboard'
import AdminDashboardpage from './pages/AdminDashboardpage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          {/* <Route path='/' element={<EmplyeeDashboardPage />} /> */}
          <Route path='/' element={<AdminDashboardpage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
