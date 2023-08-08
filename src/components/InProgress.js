import Tasks from './Tasks'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const InProgress = () => {
  const tasks = useSelector((state)=>state.task.tasks)

  const inProgress = tasks.filter((item)=>(item.inProgress===true))
  return (
    <div className="m-2 flex flex-col justify-center items-center">
      <span className="flex items-center">
        <i className="fas fa-sync-alt mr-2 hover:animate-spin-slow"></i>
        <h2 className="text-base ">In Progress</h2>
      </span>
      <Tasks data={inProgress} />
    </div>
  )
}

export default InProgress
