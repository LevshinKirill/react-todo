import React from 'react';

interface ITodoComponent {
    todo: ITodo,
    switchTodoStatus(id: string): void,
    deleteTodo(id: string): void
}

const Todo = (props: ITodoComponent) => {

    return (
        <li
            className={props.todo.isCompleted ? "checked todo" : "todo"}
        >
            <span onClick={() => props.switchTodoStatus(props.todo.id)} className="todo-text">{props.todo.task}</span>
            <span onClick={() => props.deleteTodo(props.todo.id)} className="close">x</span>
        </li>
    );

};

export default Todo;