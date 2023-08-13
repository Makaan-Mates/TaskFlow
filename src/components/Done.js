import Tasks from './Tasks'
import { useSelector } from 'react-redux/es/hooks/useSelector'
// import {useDroppable} from "@dnd-kit/core"

const Done = () => {
  const tasks = useSelector((state)=>state.task.tasks)

  const done = tasks.filter((item)=>(item.done===true))

  // const {isOver,setNodeRef} = useDroppable({
  //   id: 'done-container',
  // });

  // const style = {
  //   background: isOver ? 'green' : undefined,
  // };

  return (
    <div className=" bg-red-800 h-full m-2 flex flex-col  items-center w-64">
      <span className="flex items-center">
        <i className="far fa-check-circle mr-2 text-green-800 "></i>
        <h2 className="text-base ">Done</h2>
      </span>
      {done.map((task) => (
        <Tasks id={task?.taskid} key={task?.taskid} task={task} />
      ))}
    </div>
  )
}

export default Done
