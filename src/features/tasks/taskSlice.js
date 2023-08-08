import { createSlice } from "@reduxjs/toolkit";

const localStorageData = localStorage.getItem("taskItems");
const items = localStorageData && localStorageData !== "undefined" ? JSON.parse(localStorageData) : [];

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: items
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push( action.payload);
      localStorage.setItem("taskItems", JSON.stringify(state.tasks.map(item=>item)))
    },
  },
  
});




export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;
