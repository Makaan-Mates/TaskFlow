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
    removeItem: (state,action) => {
        state.tasks.pop()
      },
    statusCheck: (state, action) => {
      const currentTask = state.tasks.at(-1)
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
    priorityCheck: (state, action) => {
      const currentTaskP = state.tasks.at(-1)
      const { payload } = action

      switch (payload) {
        case 'urgent':
          currentTaskP.priority.urgent = true
          currentTaskP.priority.high = false
          currentTaskP.priority.medium = false
          currentTaskP.priority.low = false
          break
        case 'high':
          currentTaskP.priority.urgent = false
          currentTaskP.priority.high = true
          currentTaskP.priority.medium = false
          currentTaskP.priority.low = false
          break
        case 'medium':
          currentTaskP.priority.urgent = false
          currentTaskP.priority.high = false
          currentTaskP.priority.medium = true
          currentTaskP.priority.low = false
          break
        case 'low':
          currentTaskP.priority.urgent = false
          currentTaskP.priority.high = false
          currentTaskP.priority.medium = false
          currentTaskP.priority.low = true
          break
        default:
          break
      }
      updateLocalStorage(state.tasks)
    },
  },
})

export const { addTask, statusCheck , priorityCheck,removeItem } = taskSlice.actions

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
