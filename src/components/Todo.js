import Tasks from './Tasks'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Todo = ({ parent }) => {

  const tasks = useSelector((state) => state.task.tasks)

  const todos = tasks.filter((item) => item.todo === true)

  return (
    <>
      <div
        className="m-2 h-full bg-red-800 flex flex-col items-center w-64"
      >
        <span className="  flex  items-center">
          <i className="far fa-circle mr-2 "></i>
          <h2 className="text-base ">Todo</h2>
        </span>
        {todos.map((task) => (
        <Tasks id={task?.taskid} key={task?.taskid} task={task} />
      ))}
      </div>
    </>
  )
}

export default Todo
