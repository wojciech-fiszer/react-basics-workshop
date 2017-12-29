import React from 'react'
import TodosList from './TodosList'
import TodosControl from './TodosControl'
import ActualTodosList from '../containers/ActualTodosList'
import ArchivedTodosList from '../containers/ArchivedTodosList'

const App = () =>
    <div className="container">
        <h1>Todos app</h1>
        <div className="row">
            <div className="col-6">
                <ActualTodosList />
            </div>
            <div className="col-6">
                <ArchivedTodosList />
            </div>
        </div>
    </div>


export default App