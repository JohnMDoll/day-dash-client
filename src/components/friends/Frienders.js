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
                        <div className="friend--name" title={`View more details for ${f.friend.name}`} onClick={() => navigate(`friend/${f.friend.id}`)} key={`home--friend--name--${f.id}`}>
                            {f.friend.name}
                        </div>
                        {f.events.map(e => {
                            return (
                                    <div className="friend--event" key={`friend--event--${f.id}--${e.id}`}>
                                    <div className="event--name" >
                                        {e.name}
                                    </div>
                                    <div className="friend--times">
                                        {timeFormatter(e.startDateTime)}-{timeFormatter(e.endDateTime)}
                                    </div>
                                    </div>
                            )
                        })}
                    </section>
                )
            })}
        </section>
    </>
}