import AuthenticationGuard from './components/AuthenticationGuard'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CallbackPage from './components/Callback'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return (<div>Loading...</div>)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/callback' element={<CallbackPage />} />
      </Routes>
    </>
  )
}

export default App
