import { useEffect, useState } from "react"
import { deleteComment, postComment, updateComment } from "../managers/CommentManager"
import "./comment.css"

export const CommentForm = ({ needCommentEditor, existingComment, setCommentToChange, eventToChange }) => {
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

    const submitHandler = (e) => {
        e.preventDefault()

        if (existingComment.hasOwnProperty("id")) {
            updateComment(comment)
        }
        else {
            postComment(comment)
        }
        closeForm()
    }

    const closeForm = () => {
        setCommentToChange({ comment: "" }) //on cancel reset state
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
                                                onClick={() => {
                                                    deleteComment(comment)
                                                        .then(closeForm())
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
                        class="commentInput"
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