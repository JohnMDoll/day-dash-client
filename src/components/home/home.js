import React, { useEffect, useState } from 'react'
import { CommentForm } from '../comments/CommentForm'
import { Agenda } from "../event/Agenda"
import { EventForm } from "../event/EventForm"
import { Frienders } from '../friends/Frienders'
import { getUserEvents } from "../managers/EventManager"
import { Weather } from '../weather/Weather'
import "./home.css"



export const Home = () => {
    const user = JSON.parse(localStorage.getItem("dd_token"))
    const [events, setEvents] = useState([])
    const [editingEvent, setEditingEvent] = useState(false)
    const [eventToChange, setEventToChange] = useState({})
    const [editingComment, setEditingComment] = useState(false)
    const [commentToChange, setCommentToChange] = useState({})
    const [weatherCondition, setWeatherCondition] = useState("");


    useEffect(() => {
        getUserEvents()
            .then(res => setEvents(res))
    }, [])

    useEffect(() => {
        const condition = weatherCondition.toLowerCase();
        const body = document.body;

        if (condition.includes("sunny") || condition.includes("clear")) {
            body.classList.add("sunny");
            body.classList.remove("rainy", "cloudy");
        } else if (condition.includes("rain") || condition.includes("storm")) {
            body.classList.add("rainy");
            body.classList.remove("sunny", "cloudy");
        } else {
            // Default to cloudy if no other condition matches
            body.classList.add("cloudy");
            body.classList.remove("sunny", "rainy");
        }
    }, [weatherCondition]);

    const Welcome = () => {
        const time = new Date().getHours()
        if (time < 12) {
            return "Good Morning "
        } else if (time < 18) {
            return "Good Afternoon "
        } else {
            return "Good Evening "
        }
    }

    return <>
        <div id="background"></div>
        <article className="home--container">
        <h1 id="welcome">{Welcome()} {user.firstName || "friend"}</h1>
            <section className="home weather--container" >
                <h3 className="weather--header">Your Weather</h3>
                <Weather setWeatherCondition={setWeatherCondition} />
            </section>
            <section className="home schedule--container">
                <h3 className="schedule--header">Your Events</h3>
                {editingComment ?
                    <CommentForm
                        setEvents={setEvents}
                        eventToChange={eventToChange}
                        setEventToChange={setEventToChange}
                        needCommentEditor={setEditingComment}
                        existingComment={commentToChange}
                        setCommentToChange={setCommentToChange}
                    />
                    : <></>}
                {editingEvent ?
                    <EventForm
                        setEvents={setEvents}
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
                            Add Event
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
