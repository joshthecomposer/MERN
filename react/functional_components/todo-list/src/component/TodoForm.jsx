import React, { useState } from 'react';

const TodoForm = (props) => {
    const [currentId, setCurrentId] = useState(0);
    const { todoList, setTodoList } = props;
    const [todoItem, setTodoItem] = useState({
        id: 0,
        content: "",
        isComplete: false
    });

    const changeHandler = (e) => {
        if (e.target.type === "checkbox") {
            setTodoItem({...todoItem, isComplete: !todoItem.isComplete})
        } else {
            setTodoItem({...todoItem, [e.target.name]:e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, todoItem])
        setTodoItem({...todoItem, id : currentId + 1})
        setCurrentId(currentId + 1);
        setTodoItem({
            id: currentId + 1,
            content: "",
            isComplete: false
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={changeHandler} name="content" value={todoItem.content} />
            <input type="checkbox" onChange={changeHandler} name="isComplete" checked={todoItem.isComplete} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;