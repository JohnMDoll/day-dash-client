import { fetchIt } from "../utils/fetchIt.js"

const API = "https://walrus-app-777xe.ondigitalocean.app"

export const getUserEvents = async () => {
    const response = await fetchIt(`${API}/events`)
    return response
}

export const getFrienderEvents = async (frienderId) => {
    const response = await fetchIt(`${API}/events?friender=${frienderId}`)
    return response
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