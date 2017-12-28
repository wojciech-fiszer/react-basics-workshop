import React from 'react'
import TodosList from './TodosList'
import TodosControl from './TodosControl'

const App = () => (
    <div className="row">
        <div className="col">
            <TodosList />
            <TodosControl />
        </div>
        <div className="col">
            <TodosList />
        </div>
    </div>
)

export default App