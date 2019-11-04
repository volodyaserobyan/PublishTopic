export const categoryReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_CATEGORY':
            return {
                ...state,
                category: action.category
            }
        default: return state;
    }
}