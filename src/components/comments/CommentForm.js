import { useEffect, useState } from "react"
import { deleteComment, postComment, updateComment } from "../managers/CommentManager"
import { getUserEvents } from "../managers/EventManager"
import "./comment.css"

export const CommentForm = ({ setEvents, needCommentEditor, existingComment, setCommentToChange, eventToChange, setEventToChange }) => {
    const user = JSON.parse(localStorage.getItem('dd_token'))
    const [comments, setComments] = useState(eventToChange.comments)
    const [comment, setComment] = useState({
        comment: "",
        event: eventToChange.id,
    })

    useEffect(() => {
        document.querySelector(".comment.form--container")
            .addEventListener('click', handleModalClick)
    }, []
    )

    useEffect(() => {
        if (existingComment.hasOwnProperty('id')) {
            setComment(existingComment)
        }
    }, [existingComment]
    )

    const submitHandler = async (e) => {
        e.preventDefault()

        if (existingComment.hasOwnProperty("id")) {
            await updateComment(comment)
        }
        else {
            await postComment(comment)
        }
        closeForm()
    }

    const closeForm = async () => {
        const res = await getUserEvents()
        setEvents(res)
        setCommentToChange({ comment: "" }) //on cancel reset state
        setEventToChange({})
        needCommentEditor(false)
    }

    const handleModalClick = (event) => {
        if (event.target === document.querySelector(".comment.form--container")) {
            closeForm()
        }
    }
    return <>
        <section className="comment form--container">
            <form className="comment" onSubmit={submitHandler}>
                <section className="comments--container">
                    {comments.map(comment => {
                        return (
                            <div className="comment--container" key={`comment--${comment.id}`}>
                                <div className="comment">
                                    {comment.comment}
                                </div>
                                <div className="commenter--and--button--container">
                                    <div className="comment--button--container">
                                        {user.id === comment.commenter.id ? <>
                                            {/* <button className="comment--edit">✏</button> */}
                                            <button type="button" className="comment--delete"
                                                onClick={async () => {
                                                    await deleteComment(comment)
                                                    closeForm()
                                                }}>
                                                ❌
                                            </button>
                                        </>
                                            : <></>}
                                    </div>
                                    <div className="commenter">
                                        -{comment.commenter.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
                <fieldset className="comment">
                    <label htmlFor="commentInput" className="comment--label">
                        Write a comment!
                    </label>
                    <textarea type="text"
                        className="commentInput"
                        id="commentInput"
                        required autoFocus
                        placeholder="Don't forget the thing!"
                        value={comment.comment}
                        onChange={(e) => setComment({ ...comment, comment: e.target.value })} />
                    <div className="comment button--container">
                        <button type="submit" className="commentFormSubmit--button">Add Comment</button>
                        <button type="button" className="commentFormCancel--button"
                            onClick={closeForm} >
                            Cancel
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    </>
}