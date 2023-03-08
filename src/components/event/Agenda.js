

export const Agenda = (events) => {
    /**
     * Maps list of events into agenda style html 
     * @param {list} list of event objects.
     * @returns {string} html agenda format
     */

    const agenda = (<section className="agenda">
        {
            events.map((e) => {
                return (
                    <section className="agenda--event" key={`event--${e.id}`}>
                        <div>
                            <div className="agenda--eventName">
                                Event name: {e.name}
                            </div>
                            <div className="agenda--eventDescription">
                                Description: {e.description}
                            </div>
                            <div className="agenda--eventStart">
                                Start time: {e.startDateTime}
                            </div>
                        </div>
                        <div className="eventButton--container">
                            <button className="event--edit">✏</button>
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