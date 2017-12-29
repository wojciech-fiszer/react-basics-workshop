import React from 'react'

const TodosControl = ({
    title, onTitleChange, onAdd, onArchive
}) =>
    <div className="btn-toolbar">
        <div className="input-group">
            <input className="form-control" type="text" onChange={e => onTitleChange(e.target.value)} value={title} />
            <span className="input-group-btn">
                <button className="btn btn-secondary" type="button" onClick={e => onAdd(title)}>Add</button>
            </span>
        </div>
        <button className="btn" type="button" onClick={e => onArchive()}>Archive done</button>
    </div>


export default TodosControl