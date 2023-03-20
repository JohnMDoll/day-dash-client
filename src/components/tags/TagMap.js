import { useEffect, useState } from "react"
import { getTags } from "../managers/TagManager"


export const TagMap = ({ existingTags, resultTags = undefined }) => {
    /**
     * module to be called whenever tags assignments are required
     * @param existingTags any tags already assigned to an object
     * @param resultTags setterfunction or other from parent to get selected tag array
     */
    const [userTags, setUserTags] = useState([{ id: 0, tag: "" }])
    const [activeTags, setActiveTags] = useState([])

    useEffect(() => {
        getTags()
            .then(res => setUserTags(res))
    }, []
    )

    useEffect(() => {
        if (existingTags) {
        let tagCopy = [...existingTags]
        tagCopy.forEach((tag) => {return tag.id})
        setActiveTags(tagCopy)
    }
    }, [existingTags]
    )

    useEffect(() => {
        if (typeof resultTags === undefined) {
            return
        } else if (typeof resultTags === "function") {
            resultTags(activeTags)
        } else {
            resultTags = activeTags
        }
    }, [activeTags]
    )

    const tagCheck = (e) => {
        let tagCopy = new Set(activeTags)
        if (e.target.checked) {
            tagCopy.add(parseInt(e.target.value))
            setActiveTags(Array.from(tagCopy))
        } else {
            tagCopy.delete(parseInt(e.target.value))
            setActiveTags(Array.from(tagCopy))
        }
    }

    return <section className="tagmap">
        {
            userTags.map((t) => {
                return <div className="mapped--tag" id={t.id} key={`tag-${t.id}`}>
                    <input
                        type={"checkbox"}
                        defaultChecked={existingTags? existingTags.find(exTag => exTag === t.id): false}
                        name={`tag--${t.id}`}
                        value={t.id}
                        onClick={tagCheck} />
                    <label htmlFor={`tag--${t.id}`}>{t.tag}</label>
                </div>
            })
        }
    </section>

}