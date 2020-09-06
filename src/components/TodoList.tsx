import React, { useState, useEffect } from 'react';
import '../ITodo.ts';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        if (localStorage.getItem("todo-list")) {
            setTodos(
                JSON.parse(localStorage.getItem("todo-list"))
            )
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("todo-list", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (taskName: string): void => {
        setTodos(
            [...todos, {
                id: "id" + Math.random().toString(16).slice(2),
                isCompleted: false,
                task: taskName
            }]
        );
    };

    const switchTodoStatus = (id: string): void => {
        const currentTodos = [...todos];
        currentTodos.find(t => t.id === id).isCompleted = !currentTodos.find(t => t.id === id).isCompleted;
        setTodos(
            [...currentTodos]
        );
    };

    const deleteTodo = (id: string): void => {
        setTodos(
            todos.filter(t => t.id !== id)
        );
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <ul className="todo-list">
                {todos.map(t =>
                    <Todo key={t.id} todo={t} switchTodoStatus={switchTodoStatus} deleteTodo={deleteTodo} />
                )}
            </ul>
        </div>
    );

};

export default TodoList;