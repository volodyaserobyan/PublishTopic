export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SUCCESS_LOGIN':
            return {
                ...state,
                info: action.info
            }
        case 'ERROR':
            return {
                ...state,
                info: action.info
            }
        default: return state;
    }
}