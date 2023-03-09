import { useEffect, useState } from "react"
import { postFriend } from "../managers/FriendManager"

export const FriendForm = ({ setNeedForm }) => {
    const [friend, setFriend] = useState({
        email: ""
    })

    const submitHandler = async (e) => {
        e.preventDefault()
        await postFriend(friend)
        setNeedForm(false)
    }

    const closeForm = () => {
        setFriend({ email: {} }) //on cancel reset state
        setNeedForm(false)
    }

    return <section className="friend form--container">
        <form className="friend" onSubmit={submitHandler}>
            <fieldset className="email">
                <label htmlFor="emailInput" className="friend email">
                    Add a friend by email:
                </label>
                <input type="email"
                    className="friend form--field"
                    id="emailInput"
                    required autoFocus
                    placeholder="friend@email.com"
                    value={friend.email}
                    onChange={(e) => setFriend({ ...friend, email: e.target.value })} />
                <div className="friend button--container">
                    <button type="submit" className="friendFormSubmit--button">Add Friend</button>
                    <button type="button" className="friendFormCancel--button"
                        onClick={closeForm} >
                        Cancel
                    </button>
                </div>
            </fieldset>
        </form>
    </section>
}