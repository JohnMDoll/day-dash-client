import { fetchIt } from "../utils/fetchIt.js"

const API = "https://walrus-app-777xe.ondigitalocean.app"

export const getComments = async () => {
    const response = await fetchIt(`${API}/comments`)
    return response
}

export const postComment = async (comment) => {
    const response = await fetchIt(`${API}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment)
    })
    return response
}

export const updateComment = async (comment) => {
    const response = await fetchIt(`${API}/comments/${comment.id}`, {
        method: 'PUT',
        body: JSON.stringify(comment)
    })
    return response
}

export const deleteComment = async (comment) => {
    const response = await fetchIt(`${API}/comments/${comment.id}`, {
        method: 'DELETE'
    })
    return response
}