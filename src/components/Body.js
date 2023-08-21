import Done from './Done'
import InProgress from './InProgress'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {
  addTask,
  priorityCheck,
  statusCheck,
} from '../features/tasks/taskSlice'
import { addItemCard } from '../features/addItemCard/addItemCardSlice'
import Todo from './Todo'

const Body = () => {
  const dispatch = useDispatch()
  const showAddItemCard = useSelector((state) => state.addItemCard.flag)

  const [taskTitle, setTaskTitle] = useState('')
  const [error, setError] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [status, setStatus] = useState('')
  const [priority, setpriority] = useState('')
  const containerRef = useRef()

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      dispatch(addItemCard(false))
    }
  }

  useEffect(() => {
    if (showAddItemCard) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleTitleInput = (event) => {
    setTaskTitle(event.target.value)
  }

  const handleCreateTask = (event) => {
    event.preventDefault()

    if (taskTitle.length === 0) {
      setError('Please enter a task title')
      return
    }

    dispatch(addTask(taskItems))
    dispatch(addItemCard(false))
    setTaskTitle('')
    setTaskDescription('')
    dispatch(statusCheck(status))
    dispatch(priorityCheck(priority))
    setStatus('')
    setpriority('')
    setError('')
  }

  const taskItems = {
    taskid: uuidv4(),
    title: taskTitle,
    description: taskDescription,
    todo: true,
    inProgress: false,
    done: false,
    priority: 'medium',
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('')
    }, 2000)

    return () => clearTimeout(timer)
  }, [error])

  return (
    <div className=" relative w-10/12  flex flex-col items-center  text-lg bg-[#141111] text-white">
      {showAddItemCard ? (
        <div
          ref={containerRef}
          className="absolute z-10 justify-between flex flex-col backdrop-filter rounded-xl bg-[#1B1B27]/50 backdrop-blur-xl top-[18%] w-[65%] h-[60%]"
        >
          <div>
            <input
              type="text"
              value={taskTitle}
              onChange={handleTitleInput}
              className="bg-transparent my-8 mx-8 mt-16 text-2xl font-bold focus:outline-none"
              placeholder="Task Title"
            ></input>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-[90%] ml-8 bg-transparent focus:outline-none resize-none"
              placeholder="Add Description..."
            ></textarea>
          </div>

          <div className="flex  items-center justify-between mb-10 ml-8">
            <div>
              <select
                className=" w-20 appearance-none text-center bg-[#3F3E51]  px-2 py-1 text-sm rounded-xl focus:outline-none  "
                name="Status"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value)
                }}
              >
                <option value="placeholder">Status</option>
                <option className="my-2" value="todo">
                  Todo
                </option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
              <select
                className="w-20 appearance-none text-center bg-[#3F3E51] mx-3 px-2 py-1 text-sm rounded-xl focus:outline-none items-center"
                name="Priority"
                value={priority}
                onChange={(e) => {
                  setpriority(e.target.value)
                }}
              >
                <option value="placeholder">Priority</option>
                <option value="urgent">Urgent</option>

                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <select
                className=" w-20 appearance-none text-center bg-[#3F3E51] px-2 py-1 text-sm rounded-xl focus:outline-none"
                name="Status"
              >
                <option value="placeholder">Tags</option>
                <option value="0">Work</option>
                <option value="1">Personal</option>
                <option value="2">Code</option>
                <option value="3">Design</option>
              </select>
            </div>
            <div className="items-center">
              <button
                onClick={handleCreateTask}
                className="bg-[#575AC6] shadow-inner shadow-[#000000]/40 text-sm font-bold mx-4 mr-14 px-4 py-2  rounded-lg"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {error && (
        <span className="absolute px-4 py-2 bg-red-800 rounded-md  bottom-10">
          <i className="fa-solid fa-triangle-exclamation mr-3"></i>
          {error}
        </span>
      )}

      <div className="mt-4 mr-2 px-4 py-2 w-[100%] flex justify-end ">
        <i className="fas fa-list mx-2 cursor-pointer"></i>
        <i className="fas fa-th-large mx-2 cursor-pointer"></i>{' '}
      </div>

      <div className=" w-[100%] m-4  p-4 flex justify-between ">
        <div className="mx-10">
          <Todo />
        </div>
        <div className="mx-10 ">
          <InProgress />
        </div>
        <div className="mx-10 ">
          <Done />
        </div>
      </div>
    </div>
  )
}

export default Body
