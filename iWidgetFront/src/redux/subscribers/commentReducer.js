import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from './types'

const initialState = {
    items: [1],
    loading: false,
    err: null
}



const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            }
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                err: action.payload,
                loading: false,
            }
        default: return state
    }
}

export default commentReducer

