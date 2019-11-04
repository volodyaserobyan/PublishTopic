export const publishReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SUCCESS_PUBLISH':
            return {
                ...state,
                data: action.data
            }
        case 'ERROR':
            return {
                ...state,
                data: action.data
            }
        default: return state;
    }
}