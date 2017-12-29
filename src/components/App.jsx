import React from 'react'
import TodosList from './TodosList'
import TodosControl from './TodosControl'
import ActualTodosList from '../containers/ActualTodosList'
import ArchivedTodosList from '../containers/ArchivedTodosList'

const App = () =>
    <div className="row">
        <div className="col">
            <ActualTodosList />
        </div>
        <div className="col">
            <ArchivedTodosList />
        </div>
    </div>

export default App