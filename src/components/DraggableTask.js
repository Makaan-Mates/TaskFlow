import React from 'react'
// import { Link } from 'react-router-dom';
import { useSortable } from '@dnd-kit/sortable'
import {useDraggable} from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/tasks/taskSlice'

const DraggableTask = ({ id,task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'none'
  };

  const dispatch = useDispatch()

  const handleRemoveItem = (taskid) => {
    dispatch(removeItem(taskid))
  }

  const truncateDescription = (description, wordLimit) => {
    const words = description?.split(' ')
    if (words?.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'
    }
    return description
  }

  return (
    // <Link
    // to={!isDragging ? `/taskdetails/${task?.taskid}` : null}
    // id={task.taskid}
    // onMouseUp={handleMouseUp}
    // >
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className=" my-3 relative flex flex-col px-4 pt-8 py-4 cursor-grab w-60  hover:bg-[#1B1B27] rounded-md  "
    >
      <span className="font-bold">{task?.title}</span>
      <span className="text-slate-300 text-sm mt-4 whitespace-pre-line">
        {truncateDescription(task?.description, 9)}
      </span>
      {task?.priority === 'high' ? (
        <i className="fa-solid flex justify-end ml-4 text-sm text-green-800 fa-flag"></i>
      ) : null}
      {task?.priority === 'medium' ? (
        <i className="fa-solid flex justify-end text-sm text-yellow-600 fa-flag"></i>
      ) : null}
      {task?.priority === 'low' ? (
        <i className="fa-solid flex justify-end text-sm text-red-600/80 fa-flag"></i>
      ) : null}
      {task?.priority === 'urgent' ? (
        <i className="fa-solid flex justify-end  text-sm text-gray-300/80 fa-flag"></i>
      ) : null}
      <span>
        <i
          className="fa-solid fa-xmark text-sm text-gray-300 absolute top-1 right-2 hover:scale-150"
          onClick={(e) => {
            e.preventDefault()
            handleRemoveItem(task?.taskid)
          }}
        ></i>
      </span>
    </div>
    // </Link>
  )
}

export default DraggableTask;
