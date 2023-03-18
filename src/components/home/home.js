import React, { useEffect, useState } from 'react'
import { CommentForm } from '../comments/CommentForm'
import { Agenda } from "../event/Agenda"
import { EventForm } from "../event/EventForm"
import { Frienders } from '../friends/Frienders'
import { getUserEvents } from "../managers/EventManager"
import { ReadIt } from '../utils/readIt'
import { Weather } from '../weather/Weather'
import "./home.css"


export const Home = () => {
    const user = JSON.parse(localStorage.getItem("dd_token"))
    const [events, setEvents] = useState([])
    const [editingEvent, setEditingEvent] = useState(false)
    const [eventToChange, setEventToChange] = useState({})
    const [editingComment, setEditingComment] = useState(false)
    const [commentToChange, setCommentToChange] = useState({})

    useEffect(() => {
        getUserEvents()
            .then(res => setEvents(res))
    }, [])

    useEffect(() => {
        getUserEvents()
            .then(res => setEvents(res))
    }, [editingEvent, editingComment])

    return <>
        {/* Modify the welcome message to say Good morning, evening, etc. */}
        <h1>Welcome {user.firstName || "friend"}</h1>
        <ReadIt events={events} />
        <article className="home--container">
            <section className="home weather--container" >
                <h3 className="weather--header">Your Weather</h3>
                <Weather />
            </section>
            <section className="home schedule--container">
                <h3 className="schedule--header">Your Events</h3>
                {editingComment ?
                    <CommentForm
                        eventToChange={eventToChange}
                        needCommentEditor={setEditingComment}
                        existingComment={commentToChange}
                        setCommentToChange={setCommentToChange}
                    />
                    : <></>}
                {editingEvent ?
                    <EventForm
                        needEventEditor={setEditingEvent}
                        event={eventToChange}
                        setEventToChange={setEventToChange}
                    />
                    :
                    <>
                        <Agenda
                            events={events}
                            setEvents={setEvents}
                            setEventToChange={setEventToChange}
                            setEditingEvent={setEditingEvent}
                            commentToChange={commentToChange}
                            setEditingComment={setEditingComment}
                        />
                        <button className="new--event"
                            onClick={(e) => setEditingEvent(!editingEvent)}>
                            New Event
                        </button>
                    </>
                }
            </section>
            <section className="home friend--list--container">
                <h3 className="friendList--header">Friends with Schedules</h3>
                <Frienders />
            </section>
        </article>
    </>
}
