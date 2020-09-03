import React, { useState } from 'react';

interface ITodoForm {
    addTodo(taskName: string): void
};

const TodoForm = (props: ITodoForm) => {

    const [taskName, setTaskName] = useState<string>('');

    const changeTaskNameHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setTaskName(e.currentTarget.value);
    };

    const addTodoHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.addTodo(taskName || '');
    };

    return (
        <form className="todo-form" onSubmit={addTodoHandler}>
            <input onChange={changeTaskNameHandler} type="text" name="task-name" />
            <button type="submit">+</button>
        </form>
    );

};

export default TodoForm;