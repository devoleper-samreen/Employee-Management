import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import EmplyeeDashboardPage from './pages/EmplyeeDashboard'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<EmplyeeDashboardPage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
