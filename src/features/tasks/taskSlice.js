import { createSlice } from "@reduxjs/toolkit";

const localStorageData = localStorage.getItem("taskItems");
const items =
  localStorageData && localStorageData !== "undefined"
    ? JSON.parse(localStorageData)
    : [];

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: items,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem(
        "taskItems",
        JSON.stringify(state.tasks.map((item) => item))
      );
    },
    statusCheck: (state, action) => {
      if (action.payload === "todo") {
        state.tasks[state.tasks.length-1].todo = true;
        state.tasks[state.tasks.length-1].inProgress = false;
        state.tasks[state.tasks.length-1].done = false;
      }
      if (action.payload === "inProgress") {
        state.tasks[state.tasks.length-1].todo = false;
        state.tasks[state.tasks.length-1].inProgress = true;
        state.tasks[state.tasks.length-1].done = false;
      }
      if (action.payload === "done") {
        state.tasks[state.tasks.length-1].todo = false;
        state.tasks[state.tasks.length-1].inProgress = false;
        state.tasks[state.tasks.length-1].done = true;
      }
      localStorage.setItem(
        "taskItems",
        JSON.stringify(state.tasks.map((item) => item))
      );
    },
  },
});

export const { addTask, statusCheck} = taskSlice.actions;
export default taskSlice.reducer;
