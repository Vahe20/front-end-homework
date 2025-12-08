export const ToDoItem = ({ text, id, completed, onDelete, onCompleted }) => {
    return (
        <div className="toDoList__item">
            <h3 style={{ textDecoration: completed ? "line-through" : "none", color: completed ? "green" : "red"}}>{text}</h3>
            <div className="toDoList__item-control">
                <button onClick={() => onDelete(id)}>Delete</button>
                <button onClick={() => {onCompleted(id)}}>{completed ? "cancel" : "complete"}</button>
            </div>
        </div>
    )
}