import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const TaskDetails = () => {
  const { taskid } = useParams()
  const tasks = useSelector((state) => state.task.tasks)

  const task = tasks.find((task) => task.taskid === taskid)

  const getStatusLabel = () => {
    switch (true) {
      case task.todo:
        return 'Todo'
      case task.inProgress:
        return 'In Progress'
      case task.done:
        return 'Done'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className=" relative w-10/12 flex flex-col  text-lg bg-[#141111] text-white">
      <div className="m-14 p-6 flex flex-col bg-[#1B1B27] rounded-lg">
        <span>{task?.title}</span>
        <span className="text-slate-300 text-base mt-4 whitespace-pre-line">
          {task?.description}
        </span>
        <div className="mt-6 ">
          <span className="mr-2 p-2 bg-[#3F3E51] rounded-md hover:bg-[#1B1B27] border-[1px] hover:border-[1px] border-[#3F3E51] hover:border-black">
            {task.priority}
          </span>
          <span className="mx-2 p-2 bg-[#3F3E51] rounded-md hover:bg-[#1B1B27] border-[1px] hover:border-[1px]  border-[#3F3E51] hover:border-black">
            {getStatusLabel()}
          </span>
          <span className="mx-2 p-2 bg-[#3F3E51] rounded-md hover:bg-[#1B1B27] border-[1px] hover:border-[1px] border-[#3F3E51] hover:border-black">
            Tag
          </span>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails
