const Tasks = ({ data }) => {
  return (
    <div className="my-6 p-2 flex flex-col  justify-center items-center">
      {data.map((task) => (
        <div className="task my-3 flex flex-col px-4 py-4 w-48 bg-[#3F3E51] hover:bg-slate-600 rounded-md cursor-pointer ">
          <span className="font-bold">{task.title}</span>
          <span className="text-slate-300 text-sm">{task.description}</span>
          {Object.entries(task.priority).map(([key, value]) => {
            if (value === true) {
              switch (key) {
                case 'urgent':
                  return (
                    <i
                      key={key}
                      className="fa-solid fa-flag flex justify-end text-red-700"
                    ></i>
                    
                  )
                case 'high':
                  return (
                    <i
                      key={key}
                      className="fa-solid fa-flag flex justify-end text-green-600"
                    ></i>
                  )
                case 'medium':
                  return (
                    <i key={key} class="fa-solid fa-flag flex justify-end text-yellow-600"></i>
                  )
                case 'low':
                  return (
                    <i
                      key={key}
                      className="fa-solid fa-flag flex justify-end text-blue-600"
                    ></i>
                  )
                default:
                  return null
              }
            }
            return null
          })}
        </div>
      ))}
    </div>
  )
}

export default Tasks
