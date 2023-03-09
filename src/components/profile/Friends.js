import { useEffect, useState } from "react"
import { deleteFriend, getFriends } from "../managers/FriendManager"


export const Friends = () => {
    const [friendships, setFriendships] = useState([])

    useEffect(() => {
        getFriends()
            .then(res => setFriendships(res))
    }, []
    )

    return <>
        <section className="tools--container">
            <button type="button">Add Friend</button>
            <input type="search" placeholder="Search"></input>
        </section>
        <section className="friends">
            {friendships.map((f) => {
                return (
                    <section className="friend--box" key={`friend--${f.id}`}>
                        <div className="friend--name">
                            {f.friend.name}
                        </div>
                        <div className="button--container">
                            <button className="friend--delete"
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