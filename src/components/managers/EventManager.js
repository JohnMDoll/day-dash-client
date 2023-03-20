import { fetchIt } from "../utils/fetchIt.js"

const API = "https://walrus-app-777xe.ondigitalocean.app"

export const getUserEvents = () => {
    return fetchIt(`${API}/events`)
}

export const getFrienderEvents = (frienderId) => {
    return fetchIt(`${API}/events?friender=${frienderId}`)
}

export const postNewEvent = async (event) => {
    const response = await fetchIt(`${API}/events`, {
        method: 'POST',
        body: JSON.stringify(event)
    })
    return response
}

export const updateEvent = async (event) => {
    const response = fetchIt(`${API}/events/${event.id}`, {
        method: 'PUT',
        body: JSON.stringify(event)
    })
    return response
}

export const deleteEvent = async (event) => {
    const response = fetchIt(`${API}/events/${event.id}`, {
        method: 'DELETE'
    })
    return response
}