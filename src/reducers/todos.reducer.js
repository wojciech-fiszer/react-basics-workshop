const initialState = []

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, createTodo(action.payload.trim())]
        case 'DELETE_TODO':
            return deleteTodosWithId(state, action.payload)
        case 'ARCHIVE_TODOS':
            return deleteTodos(state, action.payload)
        case 'TOGGLE_TODO':
            return state.map(t => t.id != action.payload ? t : { ...t,
                completed: !t.completed
            })
        default:
            return state
    }
}

const createTodo = title => ({
    id: Date.now(),
    title,
    completed: false
})


const deleteTodos = (todos, todosToDelete) => deleteTodosWithIds(todos, todosToDelete.map(t => t.id))
const deleteTodosWithIds = (todos, ids) => todos.filter(t => ids.indexOf(t.id) == -1)
const deleteTodosWithId = (todos, id) => deleteTodosWithIds(todos, [id])

export default todos