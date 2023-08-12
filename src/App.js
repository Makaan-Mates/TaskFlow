import './App.css'
import Body from './components/Body'
import AsideBar from './components/AsideBar'
import { Route, Routes } from 'react-router-dom'
import TaskDetails from './components/TaskDetails'
import {DndContext} from '@dnd-kit/core';

function App() {
  return (
    <DndContext>
    <div className="App flex font-sans">
      <AsideBar />
      <Routes>
        <Route path="/" Component={Body} />
        <Route path="/taskdetails/:taskid" Component={TaskDetails} />
      </Routes>
    </div>
    </DndContext>
  )
}

export default App
