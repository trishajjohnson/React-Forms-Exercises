import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos(todos => [...todos, {...todo}]);
    }
    
    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };
    
    const allTodos = todos.map(todo => (
        <Todo 
            key = {todo.id}
            id = {todo.id}
            task = {todo.task}
            handleRemove = {removeTodo}
        />
    ));
    
    return (
        <div className="Todolist">
            <NewTodoForm createTodo={addTodo}/>
            {allTodos}
        </div>
    );
}

export default TodoList;