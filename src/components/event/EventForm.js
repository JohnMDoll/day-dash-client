import { useEffect, useState } from "react"

export const EventForm = ({ close, setEventToChange, event = {} }) => {
    const [formEvent, setFormEvent] = useState({
        name: "",
        description: "",
        location: "",
        startDateTime: "",
        endDateTime: "",
        tags: []
    })

    useEffect(() => {
        if (event !== {}) {
            setFormEvent(event)
        }
    }, [event]
    )

    const submitHandler = async (e) => {
        e.preventDefault()
        // form submit goes here. Needs a POST and PUT depending on new or edit case
        await (console.log("placeholder"))
    }

    const closeForm = () => {
        setEventToChange({}) //on cancel, clear event being edited from memory to avoid populating form in Add New case
        close(false)
    }

    return <section className="event form--container">
        <form className="event" onSubmit={submitHandler}>
            <fieldset className="event">
                <label htmlFor="nameInput" className="event name">
                    Title:
                </label>
                <input type="text"
                    className="event form--field"
                    id="nameInput"
                    required autoFocus
                    placeholder="Event Title"
                    value={event.name}
                    onChange={(e) => setFormEvent({ ...formEvent, name: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="descriptionInput" className="event email">
                    Description:
                </label>
                <input type="description"
                    className="event form--field"
                    id="descriptionInput"
                    placeholder="Event Description"
                    value={event.description}
                    onChange={(e) => setFormEvent({ ...formEvent, description: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="locationInput" className="event location">
                    Location:
                </label>
                <input type="address"
                    className="event form--field"
                    id="locationInput"
                    placeholder="1234 Steve's Place Blvd."
                    value={event.location}
                    onChange={(e) => setFormEvent({ ...formEvent, location: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="startInput" className="event start">
                    Starting:
                </label>
                <input type="datetime-local"
                    className="event form--field"
                    id="startInput"
                    required
                    value={event.startDateTime}
                    onChange={(e) => setFormEvent({ ...formEvent, start: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="endingInput" className="event end">
                    Ending:
                </label>
                <input type="datetime-local"
                    className="event form--field"
                    id="endingInput"
                    value={event.endDateTime}
                    onChange={(e) => setFormEvent({ ...formEvent, firstName: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="tagsInput" className="event tags">
                    Tags:
                </label>
                    {/* {tags mapper} */}
            </fieldset>
            <div className="event button--container">
                <button type="submit" className="eventFormSubmit--button">Submit</button>
                <button type="button" className="eventFormCancel--button"
                onClick={closeForm} >
                    Cancel
                </button>
            </div>
        </form>
    </section>
}