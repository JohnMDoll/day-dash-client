import { useEffect, useState } from "react"
import { getFrienders } from "../managers/FriendManager"
import { timeFormatter } from "../utils/timeFormatter"


export const Frienders = () => {
    const [friendships, setFriendships] = useState([])

    useEffect(() => {
        getFrienders()
            .then(res => setFriendships(res))
    }, []
    )

        return <>
        <section className="friends">
            {friendships.map((f) => {
                return (
                    <section className="friend--box" key={`friend--${f.id}`}>
                        <div className="friend--name">
                            {f.friend.name}
                        </div>
                        {f.events.map(e => {
                            return (
                                <>
                                    <div className="friend--name">
                                        {e.name}
                                    </div>
                                    <div className="friend--name">
                                        {timeFormatter(e.startDateTime)}-{timeFormatter(e.endDateTime)}
                                    </div>
                                </>
                            )
                        })}
                    </section>
                )
            })}
        </section>
    </>
}