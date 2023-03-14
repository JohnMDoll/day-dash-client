import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Agenda } from "../event/Agenda"
import { getFrienderEvents } from "../managers/EventManager"
import { getFriender } from '../managers/FriendManager'
import "../home/home.css"
import { Weather } from '../weather/Weather'
import { CommentForm } from '../comments/CommentForm'


export const FriendProfile = () => {
    const frienderId = useParams().id
    const [friend, setFriend] = useState({})
    const [events, setEvents] = useState([])
    const [eventToChange, setEventToChange] = useState({})
    const [editingComment, setEditingComment] = useState(false)
    const [commentToChange, setCommentToChange] = useState({})

    useEffect(() => {
        getFriender(frienderId)
            .then(res => setFriend(res))

        getFrienderEvents(frienderId)
            .then(res => setEvents(res))
    }, [frienderId, editingComment]
    )

    return <>
        <h1>{`${friend.name}` || "friend"}</h1>
        <article className="home--container">
            <section className="home weather--container">
                <h3 className="weather--header">Weather</h3>
                <Weather friendId={frienderId} />
            </section>
            <section className="home schedule--container">
                <h3 className="schedule--header">Events</h3>
                {editingComment ?
                    <CommentForm
                        eventToChange={eventToChange}
                        needCommentEditor={setEditingComment}
                        existingComment={commentToChange}
                        setCommentToChange={setCommentToChange}
                    />
                    : <></>}
                    <Agenda
                        events={events}
                        friend={friend}
                        setEventToChange={setEventToChange}
                        commentToChange={commentToChange}
                        setEditingComment={setEditingComment}
                    />
            </section>
        </article>
    </>
}
