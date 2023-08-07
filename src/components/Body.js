import Done from './Done'
import InProgress from './InProgress'
import Todo from './Todo'

const Body = () => {
  return (
    <>
      <div className="w-10/12 h-screen flex flex-col items-center  text-lg bg-[#141111] text-white">
        <div className="mt-4 mr-2 px-4 py-2 w-[100%] flex justify-end ">
          <i className="fas fa-list mx-2 cursor-pointer"></i>
          <i className="fas fa-th-large mx-2 cursor-pointer"></i>{' '}
        </div>
        <div className="flex w-[100%] my-4 p-4 justify-between">
          <div className="mx-12 ">
            <Todo />
          </div>
          <div className="mx-12">
            <InProgress />
          </div>
          <div className="mx-12">
            <Done />
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
