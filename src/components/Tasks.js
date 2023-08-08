import { removeItem } from '../features/tasks/taskSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import TaskDetails from './TaskDetails'

const Tasks = ({ data }) => {
  const dispatch = useDispatch()

  // const [selectedTask, setSelectedTask] = useState(null)

  const handleRemoveItem = () => {
    dispatch(removeItem)
  }
  return (
    <div className="my-6 p-2 flex flex-col  justify-center items-center">
      {data.map((task) => (
        <div
          className="relative task my-3 flex flex-col px-4 py-4 w-48 bg-[#3F3E51] hover:bg-slate-600 rounded-md cursor-pointer "
        >
          <span className="font-bold">{task.title}</span>
          <span className="text-slate-300 text-sm">{task.description}</span>
          {Object.entries(task.priority).map(([key, value]) => {
            if (value === true) {
              switch (key) {
                case 'urgent':
                  return (
                    <i
                      key={key}
                      className="fa-solid fa-flag flex justify-end text-red-700"
                    ></i>
                  )
                case 'high':
                  return (
                    <i
                      key={key}
                      className="fa-solid fa-flag flex justify-end text-green-600"
                    ></i>
                  )
                case 'medium':
                  return (
                    <i
                      key={key}
                      className="fa-solid fa-flag flex justify-end text-yellow-600"
                    ></i>
                  )
                case 'low':
                  return (
                    <i
                      key={key}
                      className="fa-solid fa-flag flex justify-end text-blue-600"
                    ></i>
                  )
                default:
                  return null
              }
            }
            return null
          })}
          <span>
            <i
              className="fa-solid fa-xmark text-[#141111] absolute top-1 right-2 "
              onClick={handleRemoveItem}
            ></i>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Tasks
