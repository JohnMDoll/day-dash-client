import { Friends } from "./Friends"
import "./profile.css"

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem("dd_user"))

    return <>
        <h1>{user.firstName}'s Dash Management Page, bitches</h1>
        <article className="profile--container">
            <section className="friends--container">
                <h3 className="friends--header">Your Friends</h3>
                <Friends user={user}/>
            </section>
            <section className="tags--container">
                <h3 className="tags--header">Your Tags</h3>
                {/* {tagThingy(user?)} */}
            </section>
        </article>
    </>
}