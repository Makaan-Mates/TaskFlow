import { useState } from 'react'
import TaskDetails from './TaskDetails'
import { removeItem } from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";

const Tasks = ({ data }) => {
  const dispatch = useDispatch();

  // const [selectedTask, setSelectedTask] = useState(null)

  const handleRemoveItem = () => {
    dispatch(removeItem);
  };
  return (
    <div className="my-6 p-2 flex flex-col  justify-center items-center">
      {data.map((task) => (

        <div className="relative  my-3 flex flex-col px-4 pt-8 py-4 w-60 bg-[#3F3E51] hover:bg-[#1B1B27] rounded-md cursor-pointer ">

          <span className="font-bold">{task.title}</span>
          <span className="text-slate-300 text-sm mt-4">{task.description}</span>

          {task.priority === "high" ? (
            <i className="fa-solid flex justify-end ml-4 text-sm text-green-800 fa-flag"></i>
          ) : null}
          {task.priority === "medium" ? (
            <i className="fa-solid flex justify-end text-sm text-yellow-600 fa-flag"></i>
          ) : null}
          {task.priority === "low" ? (
            <i className="fa-solid flex justify-end text-sm text-red-600/80 fa-flag"></i>
          ) : null}
          {task.priority === "urgent" ? (
            <i className="fa-solid flex justify-end  text-sm text-gray-300/80 fa-flag"></i>
          ) : null}

          <span>
            <i
              className="fa-solid fa-xmark text-sm text-gray-300 absolute top-1 right-2 "
              onClick={handleRemoveItem}
            ></i>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
