import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: getInitialTasks(),
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
      updateLocalStorage(state.tasks)
    },
    statusCheck: (state, action) => {
      const currentTask = state.tasks[state.tasks.length - 1]
      const { payload } = action

      switch (payload) {
        case 'todo':
          currentTask.todo = true
          currentTask.inProgress = false
          currentTask.done = false
          break
        case 'inProgress':
          currentTask.todo = false
          currentTask.inProgress = true
          currentTask.done = false
          break
        case 'done':
          currentTask.todo = false
          currentTask.inProgress = false
          currentTask.done = true
          break
        default:
          break
      }
      updateLocalStorage(state.tasks)
    },
    
  },
})

export const { addTask, statusCheck } = taskSlice.actions

export default taskSlice.reducer

function getInitialTasks() {
  const localStorageData = localStorage.getItem('taskItems')
  return localStorageData && localStorageData !== 'undefined'
    ? JSON.parse(localStorageData)
    : []
}

function updateLocalStorage(tasks) {
  localStorage.setItem('taskItems', JSON.stringify(tasks))
}
