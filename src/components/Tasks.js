const Tasks = ({ data }) => {
  return (
    <div className="my-6 p-2 flex flex-col  justify-center items-center">
      {/* Give key in the map  */}
      {data.map((task) => (
        <div className="my-3 flex flex-col px-4 py-4 w-48 bg-[#3F3E51] rounded-md ">
          <span className="font-bold">{task.title}</span>
          <span className="text-slate-300 text-sm">{task.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
