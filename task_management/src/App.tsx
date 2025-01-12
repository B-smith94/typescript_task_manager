import AuthenticationGuard from './components/AuthenticationGuard'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CallbackPage from './components/Callback'
import TasksContext, { useTasksContext } from './TaskContext'
import tasksReducer from './components/TasksReducer'
import { useReducer } from 'react'
import TaskDashboard from './components/TaskDashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return (<div>Loading...</div>)

  const [state, dispatch] = useReducer(tasksReducer, { tasks: [] });
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <TasksContext.Provider value={state}>
          <Route path='/dashboard' element={<AuthenticationGuard component={<TaskDashboard />} />} />
          <Route path='/details' element={<AuthenticationGuard component={<ViewDetails />} />} />
          <Route path='/create-task' element={<AuthenticationGuard component={<CreateTask />} />} />
          <Route path='/edit-task' element={<AuthenticationGuard component={<EditTask />} />} />
        </TasksContext.Provider>
        <Route path='/callback' element={<CallbackPage />} />
      </Routes>
    </>
  )
}

export default App
