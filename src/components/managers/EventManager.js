import { fetchIt } from "../utils/fetchIt.js"

const API = "http://localhost:8000"

export const getUserEvents = () => {
    return fetchIt(`${API}/events`)
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