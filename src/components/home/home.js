import React, { useEffect, useState } from 'react'
import { Agenda } from "../event/Agenda"
import { EventForm } from "../event/EventForm"
import { getUserEvents } from "../managers/EventManager"
import "./home.css"


export const Home = () => {
    const user = JSON.parse(localStorage.getItem("dd_user"))
    const [events, setEvents] = useState([])
    // const [userAgenda, setUserAgenda] = useState([])
    const [changeEvent, setChangeEvent] = useState(false)
    const [eventToChange, setEventToChange] = useState({})

    useEffect(() => {
        getUserEvents()
            .then(res => setEvents(res))
    }, [])

    // useEffect(() => {
    //     const newAgenda = Agenda(events)
    //     setUserAgenda(newAgenda)
    // }, [events])

    return <>
        {/* Modify the welcome message to say Good morning, evening, etc. */}
        <h1>Welcome {user.firstName || ""}</h1>
        {changeEvent && <p>words</p>}
        <article className="home--container">
            <section className="home weather--container">
                <h3 className="weather--header">Your Weather</h3>
                {/* {weatherThingy(user)} */}
            </section>
            <section className="home schedule--container">
                <h3 className="schedule--header">Your Events</h3>
                {changeEvent ?
                    <EventForm close={setChangeEvent} />
                    :
                    <>
                        {/* {userAgenda} */}
                        <Agenda events={events} />
                        <button className="new--event"
                            onClick={(e) => setChangeEvent(!changeEvent)}>
                            Add Event
                        </button>
                    </>
                }
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
