import Tasks from './Tasks'

const Done = () => {
  return (
    <div className="m-2 flex flex-col justify-center items-center">
      <span className="flex items-center">
        <i className="far fa-check-circle mr-2 text-green-800 "></i>
        <h2 className="text-base ">Done</h2>
      </span>
      <Tasks />
    </div>
  )
}

export default Done
