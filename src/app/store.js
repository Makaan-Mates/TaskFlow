import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice' 
import addItemCardReducer from '../features/addItemCard/addItemCardSlice'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    addItemCard: addItemCardReducer
  },
})

