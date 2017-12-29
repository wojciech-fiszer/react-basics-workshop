import React from 'react'
import { connect } from 'react-redux'
import TodosList from '../components/TodosList'

const mapStateToProps = (state) => ({
    title: 'Archived',
    todos: state.archivedTodos
})

export default connect(mapStateToProps)(TodosList)