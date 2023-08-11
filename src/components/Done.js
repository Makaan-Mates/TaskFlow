import Tasks from './Tasks'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Done = () => {
  const tasks = useSelector((state)=>state.task.tasks)

  const done = tasks.filter((item)=>(item.done===true))
  return (
    <div className="m-2 flex flex-col  items-center w-64">
      <span className="flex items-center">
        <i className="far fa-check-circle mr-2 text-green-800 "></i>
        <h2 className="text-base ">Done</h2>
      </span>
      <Tasks data={done} />
    </div>
  )
}

export default Done
