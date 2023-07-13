import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: ['make coffee', 'study redux'],
    reducers: {}
})

export const store = configureStore({
    reducer: {
        todoSlice: todoSlice.reducer
    }
})