import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getFrienders } from "../managers/FriendManager"
import { timeFormatter } from "../utils/timeFormatter"


export const Frienders = () => {
    const [friendships, setFriendships] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getFrienders()
            .then(res => setFriendships(res))
    }, []
    )

    return <>
        <section className="friends" key={`home--friends`}>
            {friendships.map((f) => {
                return (
                    <section className="friend--box" key={`friend--${f.id}`}>
                        <div className="friend--name" onClick={() => navigate(`/friend/${f.friend.id}`)} key={`home--friend--name--${f.id}`}>
                            {f.friend.name}
                        </div>
                        {f.events.map(e => {
                            return (
                                <>
                                    <div className="friend--name" key={`friend--event--name--${f.id}${e.id}`}>
                                        {e.name}
                                    </div>
                                    <div className="friend--times" key={`friend--times--${f.id}${e.id}`}>
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