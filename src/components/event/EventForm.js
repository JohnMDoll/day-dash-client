import { useEffect, useState } from "react"

export const EventForm = ({ close, event = {} }) => {
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
        close(false)
    }

    return <section className="event form--container">
        <form className="event" onSubmit={submitHandler}>
            <fieldset className="event">
                <label htmlFor="nameInput" className="event name">
                    Title:
                </label>
                <input type="text"
                    id="nameInput"
                    required autoFocus
                    className="event form--field"
                    placeholder="Event Title"
                    onChange={(e) => setFormEvent({ ...formEvent, name: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="descriptionInput" className="event email">
                    Description:
                </label>
                <input type="description"
                    id="descriptionInput"
                    className="event form--field"
                    placeholder="Event Description"
                    onChange={(e) => setFormEvent({ ...formEvent, description: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="locationInput" className="event location">
                    Location:
                </label>
                <input type="address"
                    id="locationInput"
                    className="event form--field"
                    placeholder="1234 Steve's Place Blvd."
                    onChange={(e) => setFormEvent({ ...formEvent, location: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="startInput" className="event start">
                    Starting:
                </label>
                <input type="datetime-local"
                    id="startInput"
                    required
                    className="event form--field"
                    onChange={(e) => setFormEvent({ ...formEvent, start: e.target.value })} />
            </fieldset>
            <fieldset className="event">
                <label htmlFor="endingInput" className="event end">
                    Ending:
                </label>
                <input type="datetime-local"
                    id="endingInput"
                    className="event form--field"
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