import Done from './Done'
import InProgress from './InProgress'
import Todo from './Todo'

const Body = () => {
  return (
    <>
      <div className="w-10/12 h-screen flex   text-lg bg-[#141111] text-white">
        <div className='flex m-16 justify-between'>
         
          <Todo />
          <InProgress />
          <Done />
        </div>
      </div>
    </>
  )
}

export default Body
