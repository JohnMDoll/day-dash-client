import { deleteEvent, getUserEvents } from "../managers/EventManager"
import { timeFormatter } from "../utils/timeFormatter"

export const Agenda = ({ setEventToChange = undefined, setEditingEvent = undefined, events = [], setEvents = undefined, friend = false, setCommentToChange, setEditingComment }) => {

    return (<section className="agenda">
        {
            events.map((e) => {
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
                        </div>
                        <div className="button--container">
                            <button className="event--comment"
                                onClick={() => [setEventToChange({ id: e.id, comments: e.comments }), setEditingComment(true)]}>
                                💬
                                <div className="comment--count">
                                    {e.comments.length}
                                </div>
                            </button>
                            {!friend ?
                                <>
                                    <button className="event--edit"
                                        onClick={() => [setEventToChange(e), setEditingEvent(true)]}>
                                        ✏
                                    </button>
                                    <button className="event--delete"
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