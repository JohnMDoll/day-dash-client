import { fetchIt } from "../utils/fetchIt.js"

const API = "https://walrus-app-777xe.ondigitalocean.app/"

export const getUserEvents = () => {
    return fetchIt(`${API}/events`)
}

export const getFrienderEvents = (frienderId) => {
    return fetchIt(`${API}/events?friender=${frienderId}`)
}

export const postNewEvent = (event) => {
    return fetchIt(`${API}/events`, {
        method: 'POST',
        body: JSON.stringify(event)
    })
}

export const updateEvent = (event) => {
    return fetchIt(`${API}/events/${event.id}`, {
        method: 'PUT',
        body: JSON.stringify(event)
    })
}

export const deleteEvent = (event) => {
    return fetchIt(`${API}/events/${event.id}`, {
        method: 'DELETE'
    })
}