import AuthenticationGuard from './components/AuthenticationGuard'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CallbackPage from './components/Callback'
import TasksContext, { TasksContextValue, useTasksContext } from './TaskContext'
import CreateTask from './components/CreateTask'
import EditTask from './components/EditTask'
import tasksReducer from './components/TasksReducer'
import { useReducer } from 'react'
import TaskDashboard from './components/TaskDashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return (<div>Loading...</div>)
  const initialState = { tasks: [], dispatch: () => {} };
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <>
        <TasksContext.Provider value={{ ...state, dispatch }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<AuthenticationGuard component={TaskDashboard} />} />
            <Route path='/create-task' element={<AuthenticationGuard component={CreateTask} />} />
            <Route path='/edit-task/:id' element={<AuthenticationGuard component={EditTask} />} />
          <Route path='/callback' element={<CallbackPage />} />
        </Routes>
      </TasksContext.Provider>
    </>
  )
}

export default App
