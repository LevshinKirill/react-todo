import React from 'react';

interface ITodoComponent {
    todo: ITodo,
    switchTodoStatus(id: string): void,
    deleteTodo(id: string): void
}

const Todo = (props: ITodoComponent) => {

    return (
        <div className="todo">
            <label>{props.todo.task}</label>
            <input type="checkbox" className="checkbox" defaultChecked={props.todo.isCompleted}
                onClick={() => props.switchTodoStatus(props.todo.id)}
            />
            <button
                onClick={() => props.deleteTodo(props.todo.id)}>x
            </button>
        </div>
    );

};

export default Todo;