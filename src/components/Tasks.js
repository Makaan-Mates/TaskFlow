
import DraggableTask from './DraggableTask';

const Tasks = ({ task,id }) => {
  

  return (
    <div className="my-6 p-2  flex flex-col  justify-center items-center">
     
     <DraggableTask id={id}  task={task} />
    
    </div>
  )
}

export default Tasks
