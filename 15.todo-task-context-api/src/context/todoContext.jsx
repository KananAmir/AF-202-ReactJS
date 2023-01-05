import { createContext, useState } from "react";

export const todoContext = createContext(null);

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);

    //"public" values
    console.log(todos);

    const data = {
        todos,
        setTodos
    }

    return <todoContext.Provider value={data}>{children}</todoContext.Provider>

}