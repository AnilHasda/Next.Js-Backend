import {createSlice} from "@reduxjs/toolkit";
const initialState={
  name:"Anil"
}
const testSlice=createSlice({
  name:"test_slice",
  initialState,
  reducers:{
    updateData:(state,action)=>{
      Object.keys(action.payload).forEach(key=>{
        if(state.hasOwnProperty(key)){
        state[key]=action.payload[key]
      }
      })
    }
  }
});
export const {updateData} = testSlice.actions;
export default testSlice.reducer;