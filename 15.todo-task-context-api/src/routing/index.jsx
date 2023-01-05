import React from 'react'
import { Route, Routes } from "react-router-dom";
import AddTodoPage from '../pages/add-todo-page';
import TodoPage from '../pages/todo-page';
import CompletedTodos from '../pages/completed-todos';


export const Routing = () => {
    return (
        <div className="container mx-auto px-4">
            <Routes>
                <Route path='/' element={<TodoPage />} />
                <Route path='/add-todo' element={<AddTodoPage />} />
                <Route path='/completed-todos' element={<CompletedTodos />} />

                <Route path='*' element={<div>Not Found</div>} />
            </Routes>
        </div>
    )
}

export default Routing