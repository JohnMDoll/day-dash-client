import { useEffect, useState } from "react"
import { deleteFriend, getFriends } from "../managers/FriendManager"


export const Friends = ({ user }) => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getFriends()
            .then(res => setFriends(res))
    }, []
    )

    return <>
        <section className="tools--container">
            <button type="button">Add Friend</button>
            <input type="search" placeholder="Search"></input>
        </section>
        <section className="friends--container">
            {friends.map((f) => {
                <section className="friend--box" key={`friend--${f.id}`}>
                    <div className="friend--name">
                        {f.fullName}
                    </div>
                    <div className="button--container">
                        <button className="friend--delete"
                            onClick={() => {
                                deleteFriend(f)
                                    .then(() => {
                                        getFriends()
                                            .then(res => setFriends(res))
                                    })
                            }}>❌</button>
                    </div>
                </section>
            })}

        </section>
    </>
}