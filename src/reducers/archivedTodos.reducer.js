const initialState = []

const archivedTodos = (state = initialState, action) => {
    switch (action.type) {
        case 'ARCHIVE_TODOS':
            return [...state, ...action.payload]
        default:
            return state
    }
}

export default archivedTodos