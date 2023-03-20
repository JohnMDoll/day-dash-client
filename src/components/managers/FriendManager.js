import { fetchIt } from "../utils/fetchIt.js"

const API = "https://walrus-app-777xe.ondigitalocean.app"

export const getFriends = async () => {
    const response = await fetchIt(`${API}/friends`)
    return response
}

export const getFrienders = async () => {
    const response = await fetchIt(`${API}/friends?frienders`)
    return response
}

export const getFriender = async (frienderId) => {
    const response = await fetchIt(`${API}/friends/${frienderId}`)
    return response
}

export const postFriend = async (friend) => {
    const response = await fetchIt(`${API}/friends`, {
        method: 'POST',
        body: JSON.stringify(friend)
    })
    return response
}

export const deleteFriend = async (friend) => {
    const response = fetchIt(`${API}/friends/${friend.id}`, {
        method: 'DELETE'
    })
    return response
}