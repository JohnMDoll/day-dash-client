import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Agenda } from "../event/Agenda"
import { Frienders } from '../friends/Frienders'
import { getFrienderEvents } from "../managers/EventManager"
import { getFriender } from '../managers/FriendManager'
import "./friendpage.css"


export const FriendProfile = () => {
    const user = JSON.parse(localStorage.getItem("dd_user"))
    const frienderId = useParams().id
    const [friend, setFriend] = useState({})
    const [events, setEvents] = useState([])
    // const [userAgenda, setUserAgenda] = useState([])

    useEffect(() => {
        getFriender(frienderId)
            .then(res => setFriend(res))

        getFrienderEvents(frienderId)
            .then(res => setEvents(res))
    }, []
    )

    return <>
        {/* Modify the welcome message to say Good morning, evening, etc. */}
        <h1>{`${friend.name}'s Details` || "friend"}</h1>
        <article className="home--container">
            <section className="home weather--container">
                <h3 className="weather--header">Weather</h3>
                {/* {weatherThingy(user)} */}
            </section>
            <section className="home schedule--container">
                <h3 className="schedule--header">Events</h3>
                    <>
                        <Agenda events={events} />

                    </>
            </section>
        </article>
    </>
}
