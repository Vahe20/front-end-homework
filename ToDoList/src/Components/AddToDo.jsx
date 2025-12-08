import { useState } from "react";

export const AddToDo = ({ addItem }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input.trim())
            return setError("Please enter a task");

        setInput("");

        if (addItem(input))
            return setError("Task already exists");
        
        setError("");
    }

    return (
        <div className="addToDo">
            <form onSubmit={handleSubmit} className="addToDo__form">
                <input
                    type="text"
                    value={input}
                    placeholder={error || "Enter todo..."}
                    className={error ? "error" : ""}
                    onChange={e => setInput(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}