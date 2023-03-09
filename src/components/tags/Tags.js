import { useEffect, useState } from "react"
import { updateTag } from "../managers/TagManager"
import { deleteTag, getTags } from "../managers/TagManager"


export const Tags = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTags()
            .then(res => setTags(res))
    }, []
    )

    const refreshTags = () => {
        getTags()
            .then(res => setTags(res))
    }

    return <>
        <section className="tools--container">
            <button type="button">Add Tag</button>
        </section>
        <section className="tags">
            {tags.map((t) => {
                return (
                    <section className="tag--box" key={`tag--${t.id}`}>
                        <div className="tag--name">
                            {t.tag}
                        </div>
                        <div className="button--container">
                            <button className="event--edit" onClick={() => {
                                updateTag(t)
                                    .then(refreshTags)
                            }}>✏</button>
                            <button className="tag--delete"
                                onClick={() => {
                                    deleteTag(t)
                                        .then(refreshTags)
                                }}>❌</button>
                        </div>
                    </section>
                )
            })}
        </section>
    </>
}