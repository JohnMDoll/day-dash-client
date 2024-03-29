import { useEffect, useState } from "react"
import { deleteEvent, getUserEvents } from "../managers/EventManager"
import { timeFormatter } from "../utils/timeFormatter"
import "./agenda.css"

export const Agenda = ({ setEventToChange = undefined, setEditingEvent = undefined, events = [], setEvents = undefined, friend = false, setCommentToChange, setEditingComment }) => {
    const [searchEvents, setSearchEvents] = useState([])

    useEffect(() => {
        setSearchEvents(events)
    }, [events]
    )

    const searchedEvents = (query) => {
        let searchResult = []
        events.map(e => {
            if (e.name.toLowerCase().includes(query.toLowerCase()) || 
            e.description.toLowerCase().includes(query.toLowerCase()) || 
            e.location.toLowerCase().includes(query.toLowerCase()) || 
            e.tags.find(tag => tag.tag.toLowerCase().includes(query.toLowerCase()))) {
                searchResult.push(e)
            }
            setSearchEvents(searchResult)
        })
    }

    useEffect(() => {
        const query = document.querySelector('#search').value
        searchedEvents(query)
    }, [events]
    )

    return (<section className="agenda">
        <input
            type="search"
            className="event--search"
            id="search"
            onChange={(e) => searchedEvents(e.target.value)}
            placeholder="Search in tags, names, etc." />
        {
            searchEvents.map((e) => {
                return (
                    <section className="event--container" key={`event--${e.id}`} id={e.id}>
                        <div className="details--container">
                            <div className="event--name">
                                {e.name}
                            </div>
                            <div className="event--description">
                                <label>Description:</label>
                                <div className="detail">
                                    {e.description}
                                </div>
                            </div>
                            <div className="event--location">
                                <label>Location:</label>
                                <div className="detail">
                                    {e.location}
                                </div>
                            </div>
                            <div className="event--start">
                                <label>When:</label>
                                <div className="detail">
                                    {timeFormatter(e.startDateTime)}-{timeFormatter(e.endDateTime)}
                                </div>
                            </div>
                            <div className="event--tags">
                                <label>Tags:</label>
                                <div className="tags--container">
                                    {e.tags.map((tag) => {
                                        return (
                                            <span className="tag-span" key={`event--${e.id}--tag--${tag.id}`}>
                                                {tag.tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="button--container">
                            <button className="event--comment" title="View/Post/Delete Comments"
                                onClick={() => [setEventToChange({ id: e.id, comments: e.comments }), setEditingComment(true)]}>
                                💬
                                <div className="comment--count">
                                    {e.comments.length}
                                </div>
                            </button>
                            {!friend ?
                                <>
                                    <button className="event--edit" title="Edit this event"
                                        onClick={() => [setEventToChange(e), setEditingEvent(true)]}>
                                        ✏
                                    </button>
                                    <button className="event--delete" title="Delete this Event"
                                        onClick={() => {
                                            deleteEvent(e)
                                                .then(() => {
                                                    getUserEvents()
                                                        .then(res => setEvents(res))
                                                })
                                        }}>
                                        ❌
                                    </button>
                                </>
                                :
                                <></>
                            }
                        </div>
                    </section>
                )
            })
        }
    </section>)
}