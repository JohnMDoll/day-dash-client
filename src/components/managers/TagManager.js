import { fetchIt } from "../utils/fetchIt.js"

const API = "https://walrus-app-777xe.ondigitalocean.app"

export const getTags = () => {
    return fetchIt(`${API}/tags`)
}

export const postTag = async (tag) => {
    const response = fetchIt(`${API}/tags`, {
        method: 'POST',
        body: JSON.stringify(tag)
    })
    return response
}

export const updateTag = async (tag) => {
    const response = fetchIt(`${API}/tags/${tag.id}`, {
        method: 'PUT',
        body: JSON.stringify(tag)
    })
    return response
}

export const deleteTag = async (tag) => {
    const response = fetchIt(`${API}/tags/${tag.id}`, {
        method: 'DELETE'
    })
    return response
}