import React, { useEffect, useState } from 'react'
import { Agenda } from "../event/Agenda"
import { EventForm } from "../event/EventForm"
import { getUserEvents } from "../managers/EventManager"
import "./home.css"


export const Home = () => {
    const user = JSON.parse(localStorage.getItem("dd_user"))
    const [events, setEvents] = useState([])
    const [userAgenda, setUserAgenda] = useState([])

    useEffect(() => {
        getUserEvents()
            .then(res => setEvents(res))
    }, [])

    useEffect(() => {
        const newAgenda = Agenda(events)
        setUserAgenda(newAgenda)
    }, [events])

    return <>
        {/* Modify the welcome message to say Good morning, evening, etc. */}
        <h1>Welcome {user.firstName || ""}</h1>
        <article className="home--container">
            <h3 className="weather--header">Your Weather</h3>
            <EventForm />
            {/* {weatherThingy(user)} */}
            <section className="home schedule--container">
                <h3 className="schedule--header">Your Events</h3>
                {userAgenda}
                <button className="new--event">New Event</button>
            </section>
            <section className="home friend--list--container">
                <h3 className="friendList--header">Friends with Schedules</h3>
                {/* {friendList(user)} */}
                <ul className="friend--list">
                    <li>Friend A</li>
                    <li>Friend 1</li>
                    <li>Friend X</li>
                </ul>
            </section>
        </article>
    </>
}
