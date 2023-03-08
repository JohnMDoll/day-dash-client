
export const Agenda = ({eventToChange, setEditingEvent, events = []}) => {

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
                                <div>
                                    {e.description}
                                </div>
                            </div>
                            <div className="event--location">
                                <label>Location:</label>
                                <div>
                                    {e.location}
                                </div>
                            </div>
                            <div className="event--start">
                                <label>When:</label>
                                <div>
                                    {e.startDateTime} - {e.endDateTime}
                                </div>
                            </div>
                        </div>
                        <div className="button--container">
                            <button className="event--edit" onClick={() => [eventToChange(e), setEditingEvent(true)]}>✏</button>
                            <button className="event--comment">💬</button>
                            <button className="event--delete">✖</button>
                        </div>
                    </section>
                )
            })
        }
    </section>)
    return agenda
}