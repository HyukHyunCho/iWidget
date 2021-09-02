import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from 'redux/subscribers/types';

const fetchCommentSuccess = () => {
    return {
        type: FETCH_COMMENTS_SUCCESS
    }
}

const fetchCommentFailure = () => {
    return {
        type: FETCH_COMMENTS_FAILURE
    }
}

const fetchCommentRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}

export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(comments => console.log(comments))
            .catch(error => console.log(error))
    }
}

//dispatch(fetchCommentSuccess(comments))


// export const dashboardAdd = () => {
//     return {
//         type: DASHBOARD_ADD
//     }
// }

// export const dashboardRemove = () => {
//     return {
//         type: DASHBOARD_REMOVE
//     }
// }
