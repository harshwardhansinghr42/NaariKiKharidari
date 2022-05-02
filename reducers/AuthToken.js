const AuthToken = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case 'UNSET_TOKEN':
            return {
                ...state,
                user: {},
                loggedIn: false
            }
    }
    return state
}

export default AuthToken