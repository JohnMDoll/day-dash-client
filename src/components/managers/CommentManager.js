import { fetchIt } from "../utils/fetchIt.js"

const API = "http://localhost:8000"

export const getComments = () => {
    return fetchIt(`${API}/comments`)
}

export const postComment = (comment) => {
    return fetchIt(`${API}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment)
    })
}

export const updateComment = (comment) => {
    return fetchIt(`${API}/comments/${comment.id}`, {
        method: 'PUT',
        body: JSON.stringify(comment)
    })
}

export const deleteComment = (comment) => {
    return fetchIt(`${API}/comments/${comment.id}`, {
        method: 'DELETE'
    })
}