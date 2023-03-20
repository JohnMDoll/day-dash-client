import { fetchIt } from "../utils/fetchIt.js"

const API = "https://walrus-app-777xe.ondigitalocean.app"

export const getTags = () => {
    return fetchIt(`${API}/tags`)
}

export const postTag = (tag) => {
    return fetchIt(`${API}/tags`, {
        method: 'POST',
        body: JSON.stringify(tag)
    })
}

export const updateTag = (tag) => {
    return fetchIt(`${API}/tags/${tag.id}`, {
        method: 'PUT',
        body: JSON.stringify(tag)
    })
}

export const deleteTag = (tag) => {
    return fetchIt(`${API}/tags/${tag.id}`, {
        method: 'DELETE'
    })
}