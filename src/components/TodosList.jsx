import React from 'react'

const TodosList = ({
    title, todos, onToggle, onDelete
}) =>
    <div>
        <h3>{title}</h3>
        <ul className="list-group">
            {todos.map(todo =>
                <li key={todo.id} className="list-group-item">
                    <input type="checkbox" checked={todo.completed} onChange={e => onToggle(todo.id)} />
                    {todo.title}{onDelete && <span className="close" onClick={e => onDelete(todo.id)}>&times;</span>}
                </li>
            )}
        </ul>
    </div>

TodosList.defaultProps = {
    onToggle: () => { }
}

export default TodosList