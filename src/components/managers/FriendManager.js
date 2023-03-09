import { fetchIt } from "../utils/fetchIt.js"

const API = "http://localhost:8000"

export const getFriends = () => {
    return fetchIt(`${API}/friends`)
}

export const postFriend = (friend) => {
    return fetchIt(`${API}/friends`, {
        method: 'POST',
        body: JSON.stringify(friend)
    })
}
// TODO not yet utilized. Maybe obsoleted in tag manager when it's written
// export const updateFriend = (friend) => {
//     return fetchIt(`${API}/friends/${friend.id}`, {
//         method: 'PUT',
//         body: JSON.stringify(friend)
//     })
// }

export const deleteFriend = (friend) => {
    return fetchIt(`${API}/friends/${friend.id}`, {
        method: 'DELETE'
    })
}