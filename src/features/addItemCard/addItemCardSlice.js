import { createSlice } from "@reduxjs/toolkit";



export const addItemCardSlice = createSlice({
  name: "addItemCard",
  initialState: {
    flag:false 
  },
  reducers: {
    addItemCard: (state, action) => {
      state.flag = action.payload
    },
  },
  
});




export const {addItemCard} = addItemCardSlice.actions;
export default addItemCardSlice.reducer;
