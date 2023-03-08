import { fetchIt } from "../utils/fetchIt.js"

const API = "http://localhost:8000"

export const getUserEvents = () => {
    return fetchIt(`${API}/events`)
}