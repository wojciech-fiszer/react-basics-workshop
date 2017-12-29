import {
    createStore,
    combineReducers
} from 'redux'
import todos from './reducers/todos.reducer'
import archivedTodos from './reducers/archivedTodos.reducer'
import title from './reducers/title.reducer'

const rootReducer = combineReducers({
    todos,
    archivedTodos,
    title
})

const store = createStore(rootReducer)

export default store