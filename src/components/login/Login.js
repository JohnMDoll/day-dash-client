import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser, registerUser } from "../managers/AuthManager"
import "./login.css"

export const Login = () => {
    localStorage.removeItem("dd_token")
    const navigate = useNavigate()
    const [register, setRegister] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        zipcode: 11111,
    })

    const submitHandler = async (e) => {
        e.preventDefault()
        await (register? registerUser(newUser) : loginUser(user))
        if (localStorage.getItem("dd_token")) {navigate("/")}
    }

    return <main className="container--login">
        <h1>Welcome to Day Dash</h1>
        <section className="login form--container">
            <form className="login" onSubmit={submitHandler}>
                <fieldset className="login">
                    <label htmlFor="emailInput" className="login email">
                        Email:
                    </label>
                    <input type="email"
                        id="emailInput"
                        required autoFocus
                        className="login form--field"
                        placeholder="email@domain.com"
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </fieldset>
                <fieldset className="login">
                    <label htmlFor="passwordInput" className="login password">
                        Password:
                    </label>
                    <input type="password"
                        id="passwordInput"
                        required
                        className="login form--field"
                        placeholder="**********"
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </fieldset>
                {!register ?
                    <>
                        <div className="login button--container">
                            <button type="submit" className="login--button">Log In</button>
                            <button onClick={() => setRegister(true)}>Register</button>
                        </div>
                    </> : <>
                        <fieldset className="login">
                            <label htmlFor="emailInput" className="login email">
                                Confirm Email:
                            </label>
                            <input type="email"
                                id="emailInput"
                                required
                                className="login form--field"
                                placeholder="email@domain.com"
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                            <label htmlFor="emailInput" className="login email" id="check" >
                                {user.email === newUser.email ? "" : "Check Email"}
                            </label>
                        </fieldset>
                        <fieldset className="login">
                            <label htmlFor="passwordInput" className="login email">
                                Confirm Password:
                            </label>
                            <input type="password"
                                id="passwordInput"
                                required
                                className="login form--field"
                                placeholder="**********"
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                            <label htmlFor="passwordInput" className="login password" id="check" >
                                {user.password === newUser.password ? "" : "Check Password"}
                            </label>
                        </fieldset>
                        <fieldset className="login">
                            <label htmlFor="firstNameInput" className="login name">
                                First Name:
                            </label>
                            <input type="text"
                                id="firstNameInput"
                                required
                                className="login form--field"
                                placeholder="Conway"
                                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} />
                        </fieldset>
                        <fieldset className="login">
                            <label htmlFor="lastNameInput" className="login name">
                                Last Name:
                            </label>
                            <input type="text"
                                id="lastNameInput"
                                required
                                className="login form--field"
                                placeholder="Twitty"
                                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} />
                        </fieldset>
                        <fieldset className="login">
                            <label htmlFor="zipcodeInput" className="login zipcode">
                                Zipcode:
                            </label>
                            <input type="number"
                                id="zipcodeInput"
                                required
                                className="login form--field"
                                placeholder="54321"
                                onChange={(e) => setNewUser({ ...newUser, zipcode: e.target.value })} />
                        </fieldset>
                        <div className="login button--container">
                            <button type="submit" className="register--button">Submit</button>
                            <button onClick={() => setRegister(false)}>Cancel Registration</button>
                        </div>
                    </>
                }
            </form>
        </section>
    </main>
}