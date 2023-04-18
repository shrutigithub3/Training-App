import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { newusers } from '../../userservice';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

const initialState={
    users:[],
    isFetching:false,
    errorCode:0,
    errorMessage:"",
};

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async(_,thunkAPI)=>{
        try{
         const response = await newusers()
         if(response.status===200){
            return response.data;
         }else{
            const message = response.message;
            const status = response.status || 404;
            return thunkAPI.rejectWithValue([status,message]);
         }
        }catch(e){
         if(e.status && e.message){
            const message = e.message;
            const status =  e.status;
            return thunkAPI.rejectWithValue([status,message])
         }
         console.log("Error",e.response.data);
         thunkAPI.rejectWithValue([e.error,e.message]);
        }
    }
);

export const userSlice = createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        clearState:(state)=>{
            state.isError=false;
            state.errorCode=0;
            state.errorMessage="";
            state.isFetching=false;
            return state
        },
    },

    extraReducers:{
        [getUsers.fulfilled]:(state,{payload})=>{
            state.isFetching = false;
            state.isError=false;
            state.errorCode=0;
            state.errorMessage="";
            state.users=payload;
            return state;
        },
        [getUsers.rejected]:(state,{payload})=>{
            state.isFetching = false;
            state.isError=true;
            state.errorCode=payload[0];
            state.errorMessage=payload[1];
            return state;
        },
        [getUsers.pending]:(state)=>{
            state.isFetching=true;
            return state;
        },
    },
})

export const {clearState,extraReducers}= userSlice.actions;
export const userSelector = (state)=>state.users;
