import { useDispatch } from 'react-redux'
import { addItemCard } from '../features/addItemCard/addItemCardSlice'
import { Link } from 'react-router-dom'


const AsideBar = () => {
  const dispatch = useDispatch()
 

  return (
    <nav className=" w-2/12  h-[100vh] flex flex-col justify-between items-center bg-[#1B1B27] text-slate-300  ">
      <div className="m-2 p-6  flex flex-col ">
        <span className="text-lg my-1 font-semibold cursor-pointer text-white">
          TaskFlow
        </span>
        <Link to='/'>
          <button
            onClick={() => {
              dispatch(addItemCard(true))
            }}
            className="bg-[#3F3E51] px-2 py-1 my-4 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:scale-105 hover:text-slate-50"
          >
            Add Task
            <i className="fa-solid fa-plus text-sm ml-1"></i>
          </button>
        </Link>

        <div className="my-2  border-b-2 border-[#3F3E51]"></div>
        <ul className="mt-3 ">
          <Link to="/">
            <li className="my-3 hover:text-slate-50 cursor-pointer">
              All Tasks
            </li>
          </Link>
          <li className="my-3 hover:text-slate-50 cursor-pointer">Active</li>
          <li className="my-3 hover:text-slate-50 cursor-pointer">Backlog</li>
        </ul>
      </div>
      <div  className="mb-4 z-10 flex items-center cursor-pointer hover:text-slate-50">
        <i className="far fa-user mr-1"></i>
        <button>Sign in</button>
      </div>
    </nav>
  )
}

export default AsideBar
