import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const url = 'https://jsonplaceholder.typicode.com/todos';

const initialState={
    todos:[],
    loading:false,
    error: null
}

const TodoSlice = createSlice({
    name: "Todo",
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>{
        builder
        //if fetch request is fulfilled
        .addCase(fetchTodosAsync.fulfilled, (state, action)=>{
            state.todos.push(...action.payload);
            state.loading = false;
        })
        //if fetch request is pending
        .addCase(fetchTodosAsync.pending,(state) => {
            state.loading = true;
        })
        //if fetch request is rejected
        .addCase(fetchTodosAsync.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        // if addtodo request is fulfilled
        .addCase(addTodoAsync.fulfilled,(state,action)=>{
            state.todos.unshift(action.payload);
            state.loading = false;
        })
        // if addtodo request is pending
        .addCase(addTodoAsync.pending,(state)=>{
            state.loading = true;
        })
        // if addtodo request is rejected
        .addCase(addTodoAsync.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // if updateTodo request is fulfilled
        .addCase(updateTodoAsync.fulfilled,(state,action)=>{
            state.todos.push(action.payload);
            state.loading=false;
        })
        // if updateTodo request is pending
        .addCase(updateTodoAsync.pending,(state,action)=>{
            state.loading = true;
        })
        // if updateTodo request is rejected
        .addCase(updateTodoAsync.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // if deleteTodo request is fulfilled
        .addCase(deleteTodoAsync.fulfilled,(state,action)=>{
            state.todos.push(action.payload);
            state.loading=false;
        })
        // if deleteTodo request is pending
        .addCase(deleteTodoAsync.pending,(state,action)=>{
            state.loading = true;
        })
        // if deleteTodo request is rejected
        .addCase(deleteTodoAsync.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

// fetch all todos from api
export const fetchTodosAsync = createAsyncThunk(
    'todos/fetch',
    async(_,{rejectWithValue}) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }      
    }
)

//add a new todo
export const addTodoAsync = createAsyncThunk(
    'todos/add',
    async(todo,{rejectWithValue}) => {
        try {
            const res = await axios.post(url, todo);
            console.log(res.data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

//update a todo
export const updateTodoAsync = createAsyncThunk(
    'todos/update',
    async(updatedTodo,{rejectWithValue})=>{
        try {
            const res = await axios.put(`${url}/${updatedTodo.id}`, updatedTodo);
            return res.data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

// delete a todo
export const deleteTodoAsync = createAsyncThunk(
    'todos/delete',
    async(TodoId,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`${url}/${TodoId}`);
            return res.data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const todoReducers = TodoSlice.reducer;
export const todoActions = TodoSlice.actions;
export const todoSelectors = (state)=>state.todoReducers; 