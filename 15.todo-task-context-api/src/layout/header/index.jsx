import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

const Header = () => {
    return (
        <div id='header'>
            <h1>Todo App</h1>
            <nav>
                <Link to={'/'}>Todo Page</Link>
                <Link to={'/add-todo'}>Add Todo Page</Link>
                <Link to={'/completed-todos'}>Completed Todos Page</Link>
            </nav>
        </div>
    )
}

export default Header