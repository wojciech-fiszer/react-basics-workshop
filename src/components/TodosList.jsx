import React from 'react'

const TodosList = ({
    title, todos, onToggle, onDelete
}) =>
    <div>
        <h3>{title}</h3>
        <div className="list-group">
            {todos.map(todo =>
                <div key={todo.id} className="list-group-item">
                    <input type="checkbox" checked={todo.completed} onChange={e => onToggle(todo.id)} />
                    {todo.title}{onDelete && <span className="close" onClick={e => onDelete(todo.id)}>&times;</span>}
                </div>
            )}
        </div>
    </div>

TodosList.defaultProps = {
    onToggle: () => { }
}

export default TodosList