import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    loading:false,
    users:[],
    error:''
}

const fetchUsers=createAsyncThunk('users/fetchUsers', ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp=>resp.data)
})

export const userSlice=createSlice({
    name:'users',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.error.message
        })
    }
})

export {fetchUsers}
export default userSlice.reducer