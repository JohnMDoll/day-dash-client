import { useEffect, useState } from "react"

export const CommentForm = ({ needCommentEditor, existingComment, setCommentToChange, eventToChange }) => {
    const [comment, setComment] = useState({
        comment: "",
        event: eventToChange,
    })

    useEffect(() => {
        document.querySelector(".comment.form--container")
            .addEventListener('click', handleModalClick)
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        // await postComment(comment)
        // needCommentEditor(false)
    }

    const closeForm = () => {
        setCommentToChange({ comment: "" }) //on cancel reset state
        needCommentEditor(false)
    }

    const handleModalClick = (event) => {
        if (event.target === document.querySelector(".comment.form--container")) {
            needCommentEditor(false)
        }
    }
    return <section className="comment form--container">
        <form className="comment" onSubmit={submitHandler}>
            <fieldset className="comment">
                <label htmlFor="commentInput" className="comment--label">
                    Write a comment!
                </label>
                <textarea type="text"
                    className="comment form--field"
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
}