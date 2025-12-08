import { ToDoItem } from './ToDoItem';

export const List = ({ items, onDelete, onCompleted }) => {
    return (
        <div className="toDoList">
            {
                items.map(item =>
                    <ToDoItem
                        key={item.id}
                        onDelete={onDelete}
                        onCompleted={onCompleted}
                        {...item} />
                )
            }
        </div>
    );
};