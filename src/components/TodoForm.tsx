import React, { useState } from 'react';
import Logo from './Logo';

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
        <form className="header" onSubmit={addTodoHandler}>
            <Logo />
            <input onChange={changeTaskNameHandler} className="input" type="text" />
        </form>
    );

};

export default TodoForm;