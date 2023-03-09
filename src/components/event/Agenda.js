import { deleteEvent, getUserEvents } from "../managers/EventManager"

export const Agenda = ({ eventToChange, setEditingEvent, events = [], setEvents }) => {

    const agenda = (<section className="agenda">
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
                                    {e.startDateTime} - {e.endDateTime}
                                </div>
                            </div>
                        </div>
                        <div className="button--container">
                            <button className="event--edit" onClick={() => [eventToChange(e), setEditingEvent(true)]}>✏</button>
                            <button className="event--comment">💬</button>
                            <button className="event--delete" onClick={() => {
                                deleteEvent(e)
                                    .then(() => {
                                        getUserEvents()
                                            .then(res => setEvents(res))
                                    })

                            }}>❌</button>
                        </div>
                    </section>
                )
            })
        }
    </section>)
    return agenda
}