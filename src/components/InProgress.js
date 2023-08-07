import Tasks from './Tasks'

const InProgress = () => {
  return (
    <div className="m-2 flex flex-col justify-center items-center">
      <span className="flex items-center">
        <i className="fas fa-sync-alt mr-2 hover:animate-spin-slow"></i>
        <h2 className="text-base ">InProgress</h2>
      </span>
      <Tasks />
    </div>
  )
}

export default InProgress
