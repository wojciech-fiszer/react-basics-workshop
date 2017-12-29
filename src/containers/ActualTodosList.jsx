import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, archiveTodos } from '../actions/todos.actions'
import { updateTitle } from '../actions/title.actions'
import TodosList from '../components/TodosList'
import TodosControl from '../components/TodosControl'

class ActualTodosList extends React.Component {

    onArchive = () => this.props.onArchive(this.props.todos.filter(t => t.completed))

    render() {
        return [
            <TodosList key="1" title='Todo' todos={this.props.todos} onToggle={this.props.onToggle} onDelete={this.props.onDelete} />,
            <TodosControl key="2" title={this.props.title} onAdd={this.props.onAdd} onTitleChange={this.props.onTitleChange} onArchive={this.onArchive} />
        ]
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    title: state.title
})

const mapDispatchToProps = {
    onAdd: addTodo,
    onToggle: toggleTodo,
    onDelete: deleteTodo,
    onTitleChange: updateTitle,
    onArchive: archiveTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(ActualTodosList)