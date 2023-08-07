// import Tasks from './Tasks'

import Tasks from './Tasks'

const Todo = () => {
  return (
    <div className="m-2 flex flex-col justify-center items-center">
      <span className="  flex  items-center">
        <i className="far fa-circle mr-2 "></i>
        <h2 className="text-base ">Todo</h2>
      </span>
      <Tasks />
    </div>
  )
}

export default Todo
