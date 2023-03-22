import { Tags } from "../tags/Tags"
import { Friends } from "../friends/Friends"
import "./profile.css"

export const Profile = () => {

  return <>
    <div className="background--container"></div>
      <h1>Your Friends & Tags</h1>
      <article className="profile--container">
        <section className="friends--container">
          <h3 className="friends--header">Your Friends</h3>
          <Friends />
        </section>
        <section className="tags--container">
          <h3 className="tags--header">Your Tags</h3>
          <Tags />
        </section>
      </article>
  </>
}