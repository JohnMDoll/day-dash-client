import { useEffect, useState } from "react"
import { deleteFriend, getFriends } from "../managers/FriendManager"
import { FriendForm } from "./FriendForm"


export const Friends = () => {
    const [friendships, setFriendships] = useState([])
    const [needForm, setNeedForm] = useState(false)

    useEffect(() => {
        if (!needForm) {
            getFriends()
                .then(res => setFriendships(res))
        }
    }, [needForm]
    )

    return <>
        <section className="tools--container">
            {needForm ?
                <FriendForm setNeedForm={setNeedForm} />
                :
                <>
                    <button type="button" onClick={() => setNeedForm(true)}>Add Friend</button>
                    <input type="search" placeholder="Search"></input>
                </>}
        </section>
        <section className="friends">
            {friendships.map((f) => {
                return (
                    <section className="friend--box" key={`friend--${f.id}`}>
                        <div className="friend--name">
                            {f.friend.name}
                        </div>
                        <div className="button--container">
                            <button className="friend--delete" title="Unfriend"
                                onClick={() => {
                                    deleteFriend(f.friend)
                                        .then(() => {
                                            getFriends()
                                                .then(res => setFriendships(res))
                                        })
                                }}>❌</button>
                        </div>
                    </section>
                )
            })}
        </section>
    </>
}