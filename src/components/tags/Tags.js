import { useEffect, useState } from "react"
import { deleteTag, getTags } from "../managers/TagManager"
import { TagForm } from "./TagForm"


export const Tags = () => {
    const [tags, setTags] = useState([])
    const [updatingTag, setUpdatingTag] = useState(0)
    const [needNewForm, setNeedNewForm] = useState(false)
    const [needUpdateForm, setNeedUpdateForm] = useState(false)

    
    const refreshTags = () => {
        getTags()
        .then(res => setTags(res))
    }

    useEffect(() => {
        refreshTags()
    }, []
    )

    useEffect(() => {
        if (!needNewForm && !needUpdateForm) {
            refreshTags()
        }
    }, [needNewForm, needUpdateForm]
    )

    return <>
        <section className="tags">
            {tags.map((t) => {
                return (
                    <section className="tag--box" key={`tag--${t.id}`}>
                        {needUpdateForm && updatingTag.id === t.id ?
                            <TagForm setNeedForm={setNeedUpdateForm} tag={t} />
                            :
                            <>
                                <div className="tag--name">
                                    {t.tag}
                                </div>
                                <div className="button--container">
                                    <button className="tag--edit" title="Edit" onClick={() => [setUpdatingTag(t), setNeedUpdateForm(true), setNeedNewForm(false)]}>✏</button>
                                    <button className="tag--delete" title="Delete"
                                        onClick={() => {
                                            deleteTag(t)
                                                .then(refreshTags)
                                        }}>❌</button>
                                </div>
                            </>}
                    </section>
                )
            })}
        </section>
        <section className="tools--container">
            {needNewForm ?
                <TagForm setNeedForm={setNeedNewForm} />
                :
                <>
                    <button type="button"  className="profile-button"  onClick={() => [setNeedNewForm(true), setUpdatingTag(0)]}>Add Tag</button>
                </>}
        </section>
    </>
}