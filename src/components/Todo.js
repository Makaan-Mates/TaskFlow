// import Tasks from './Tasks'
// import { useSelector } from 'react-redux/es/hooks/useSelector'
// import { useDroppable } from '@dnd-kit/core'
// import DraggableTask from './DraggableTask'
// import { useDispatch } from 'react-redux'
// import { updateOnDnd } from '../features/tasks/taskSlice'

// const Todo = ({ parent }) => {
//   const dispatch = useDispatch()
//   const { isOver, setNodeRef } = useDroppable({
//     id: 'todo-container',
//   })

//   const style = {
//     background: isOver ? 'green' : undefined,
//   }

//   const tasks = useSelector((state) => state.task.tasks)

//   const todos = tasks.filter((item) => item.todo === true)

//   const handleDropEvent = (taskid) => {
//     dispatch(updateOnDnd(taskid))
//   }

//   const renderTasks = () => {
//     if (parent === 'inprogress-container') {
//       todos.forEach((task) => handleDropEvent(task?.taskid))
//     } else {
//       return todos.map((task) => (
//         <Tasks id={task?.taskid} key={task?.taskid} task={task} />
//       ))
//     }
//   }

//   return (
//     <>
//       <div
//         ref={setNodeRef}
//         style={style}
//         className="m-2 h-full bg-red-800 flex flex-col items-center w-64"
//       >
//         <span className="  flex  items-center">
//           <i className="far fa-circle mr-2 "></i>
//           <h2 className="text-base ">Todo</h2>
//         </span>
//         <div className="my-6 p-2 flex flex-col  justify-center items-center">
//           {renderTasks()}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Todo
