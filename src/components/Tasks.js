
import DraggableTask from './DraggableTask';

const Tasks = ({ data }) => {
  

  return (
    <div className="my-6 p-2 flex flex-col cursor-grab  justify-center items-center">
      {data.map((task) => (
        <DraggableTask key={task?.taskid} task={task} />
      ))}
    </div>
  )
}

export default Tasks
