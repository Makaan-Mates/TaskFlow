import Tasks from './Tasks'
import { useSelector } from 'react-redux/es/hooks/useSelector'
// import {useDroppable} from "@dnd-kit/core"

const InProgress = () => {
  const tasks = useSelector((state)=>state.task.tasks)

  // const {isOver,setNodeRef} = useDroppable({
  //   id: 'inprogress-container',
  // });



  const inProgress = tasks.filter((item)=>(item.inProgress===true))
  return (
    <div  className=" bg-red-800 h-full m-2 flex flex-col  items-center w-64">
      <span className="flex items-center">
        <i className="fas fa-sync-alt mr-2 hover:animate-spin-slow"></i>
        <h2 className="text-base ">In Progress</h2>
      </span>
      {inProgress.map((task) => (
        <Tasks id={task?.taskid} key={task?.taskid} task={task} />
      ))}
    </div>
  )
}

export default InProgress
