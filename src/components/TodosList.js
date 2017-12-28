import React from 'react'

const TodosList = ({
    title, todos, onToggle, onRemove
}) => (
        <div>
            <h3>{title}</h3>
            <div className="list-group">
                {todos.map(todo => <Todo todo={todo} />)}
            </div>
        </div>
    )

export default TodosList