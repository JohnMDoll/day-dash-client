import { fetchIt } from "../utils/fetchIt.js"

const API = "https://walrus-app-777xe.ondigitalocean.app"

export const getFriends = () => {
    return fetchIt(`${API}/friends`)
}

export const getFrienders = () => {
    return fetchIt(`${API}/friends?frienders`)
}

export const getFriender = (frienderId) => {
    return fetchIt(`${API}/friends/${frienderId}`)
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