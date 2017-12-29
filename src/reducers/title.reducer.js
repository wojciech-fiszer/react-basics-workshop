const initialState = ''

const title = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE':
            return action.payload
        default:
            return state
    }
}

export default title