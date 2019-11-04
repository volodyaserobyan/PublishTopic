export const completeReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SET_DATA_CATEGORY_TOPIC':
            return {
                ...state,
                catAndTop: action.catAndTop
            }
        case 'SET_DATA_TOPIC':
            return {
                ...state,
                topic: action.topic
            }
        case 'SET_MEDIA':
            return {
                ...state,
                media: action.media
            }
        case 'RESET':
            return {
            }
        default: return state;
    }
}