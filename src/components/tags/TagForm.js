import { useEffect, useState } from "react"
import { postTag, updateTag } from "../managers/TagManager"

export const TagForm = ({ setNeedForm, tag = {} }) => {

    const [formTag, setFormTag] = useState({
        id: 0,
        tag: ""
    })

    useEffect(() => {
        if (tag.id > 0) {
            setFormTag(tag)
        }
    }, [tag]
    )

    const submitHandler = async (e) => {
        e.preventDefault()
        await (tag.id > 0? updateTag(formTag) : postTag(formTag))
        setNeedForm(false)
    }

    const closeForm = () => {
        setFormTag({ tag: {} }) //on cancel reset state
        setNeedForm(false)
    }

    return <section className="tag form--container">
        <form className="tag" onSubmit={submitHandler}>
            <fieldset className="tag">
                {
                    tag.id > 0 ?
                        ""
                        :
                        <label htmlFor="tagInput" className="tag tag">Tag Name:</label>
                }
                <input type="text"
                    className="tag form--field"
                    id="tagInput"
                    required autoFocus
                    placeholder="Tag label here"
                    defaultValue={tag.tag}
                    onChange={(e) => setFormTag({ ...formTag, tag: e.target.value })} />
                <div className="tag button--container">
                    <button type="submit" title="Submit" className="profile-button">
                        {tag.id > 0 ? "✔" : "Add Tag"}
                    </button>
                    <button type="button" title="Cancel"  className="profile-button-cancel"
                        onClick={closeForm} >
                        {tag.id > 0 ? "❌" : "Cancel"}
                    </button>
                </div>
            </fieldset>
        </form>
    </section>
}