import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state, action) =>{
            state.currentUser = action.payload
        },
        removeUser:(state)=>{
            storage.removeItem('persist:root')
            state.currentUser = null
        }
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer