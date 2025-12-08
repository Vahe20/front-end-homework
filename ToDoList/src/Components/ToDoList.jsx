import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"

export const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "go to the gym", completed: false },
        { id: 2, text: "reed a book", completed: false },
        { id: 3, text: "eat a burger", completed: false },
    ])

    const generateId = () => {
        return crypto.randomUUID();
    }

    const addItem = (text, completed = false) => {
        for (const todo of todos)
            if (todo.text === text) return true;

        const newToDo = { id: generateId(), text: text, completed };
        setTodos([...todos, newToDo]);
    }

    const onCompleted = id => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    const removeItem = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <AddToDo addItem={addItem} />
            <List items={todos} onDelete={removeItem} onCompleted={onCompleted} />
        </>
    )
}