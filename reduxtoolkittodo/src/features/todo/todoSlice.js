import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Hello World',
            completed: false,
        }
    ]
};  // initialState can be [] or {}

// sample function
// function sayHello() {
//     console.log('function return outside')
// }

export const todoSlice = createSlice({
    name: 'todo',   // chrome dev tool - test name visible
    initialState,   // initialState: initialState
    reducers: {
        // properties and function in reducers object

        // addTodo: sayHello,  // just reference dont call it here


        addTodo: (state, action) => {   // function declaration with definition
            const todo = {
                // id: Date.now(),
                id: nanoid(),
                text: action.payload,   // action.payload.text also write like this
                                        // payload is an object
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // here state.todos overriding it and saving it
            state.todos = state.todos.filter((todo) => (
                todo.id !== action.payload
            ))
        },
        // updateTodo: (state, action) => {
        //     const updatedTodoIndex = state.todos.findIndex((todo) => (
        //         todo.id === action.payload.id
        //     ));

        //     if(updatedTodoIndex !== -1) {
        //         state.todos[updatedTodoIndex] = {
        //             ...state.todos[updatedTodoIndex],
        //             completed: !state.todos[updatedTodoIndex].completed,
        //         }
        //     }
        // },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const updatedTodos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, text: newText } : todo
            );
            return {
              ...state,
              todos: updatedTodos,
            };
        },
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;   // all reducers must export