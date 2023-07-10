import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todos",
    initialState: {
        todosList: []
    },
    reducers: {
        addTask(state, action) {
            state.todosList = [...state.todosList, action.payload];
            console.log(action.payload);
            console.log(state.todosList);
        },
        deleteTask(state, action) {
            const newTodo = action.payload;
            const todos = state.todosList;
            
            const existing = todos.find(t => t.id === newTodo.id);
            if(existing) {
                const newTodoList = todos.filter(t => t.id !== newTodo.id);
                state.todosList = newTodoList;
            }
            else {
                console.log("todo not found!!");
            }
        },
        manageReminder(state, action) {
            const todo = action.payload;
            state.todosList.map(t => {
                if(t.id === todo.id) {
                    t.reminder = !t.reminder;
                }
                return t;
            })
        }
    }
})

export const TodoActions = TodoSlice.actions;

export default TodoSlice;