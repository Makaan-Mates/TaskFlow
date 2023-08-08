import Tasks from "./Tasks";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Todo = () => {
  const tasks = useSelector((state) => state.task.tasks);

  const todos = tasks.filter((item)=>(item.todo===true))

  return (
    <div className="m-2 flex flex-col justify-center items-center">
      <span className="  flex  items-center">
        <i className="far fa-circle mr-2 "></i>
        <h2 className="text-base ">Todo</h2>
      </span>
      <Tasks data={todos} />
    </div>
  );
};

export default Todo;
