import { useEffect, useState } from "react"
import { fetchIt } from "../utils/fetchIt"
import "./weather.css"

export const Weather = ({ friendId }) => {
    const [weather, setWeather] = useState({})
    // const weather = fetchIt(`https://walrus-app-777xe.ondigitalocean.app/weather`)
    useEffect(() => {
        if (!weather.hasOwnProperty('current')) {
            if (friendId) {
                fetchIt(`https://walrus-app-777xe.ondigitalocean.app/weather/${friendId}`)
                    .then(res => setWeather(res))
            } else {
                fetchIt(`https://walrus-app-777xe.ondigitalocean.app/weather`)
                    .then(res => setWeather(res))
            }
        }
    })

    return (<>
        {weather.hasOwnProperty('current') ? <section className="weather">
            <div className="weather--subheader">
                {weather.location.name}, {weather.location.region}
            </div>
            <div className="current--weather">
                <div className="all--current">
                    <h5>Now</h5>
                    <div className="temp">
                        {weather.current.temp}°F
                    </div>
                    <div className="condition">
                        {weather.current.condition}
                    </div>
                    <div className="humidity">
                        Humidity {weather.current.humidity}
                    </div>
                    <div className="wind">
                        Wind {weather.current.wind}mph
                    </div>
                </div>
            </div>
            <div className="forecast">
                <div className="today">
                    <h5>Today</h5>
                    High {weather.today.high} <br />
                    Low {weather.today.low} <br />
                    {weather.today.condition} <br />
                    Rain chance {weather.today.rain}% <br />
                </div>
                <div className="tomorrow">
                    <h5>Tomorrow</h5>
                    High {weather.tomorrow.high} <br />
                    Low {weather.tomorrow.low} <br />
                    {weather.tomorrow.condition} <br />
                    Rain chance {weather.tomorrow.rain}% <br />
                </div>
            </div>
            <div className="weatherAPI--credit--container">
                Weather data provided by WeatherAPI.com
                <img className="weatherAPI--credit" src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" title="Free Weather API"
                    onClick={() => {
                        const confirm = window.confirm("Click OK to proceed to www.weatherapi.com or Cancel to remain on this page")
                        if (confirm) { window.location.href = "https://www.weatherapi.com" }
                    }} /> {/*weatherapi.com wants a shoutout in return for free API usage*/}
            </div>
        </section>
            : <div>Weather Not Available at This Time</div>
        }
    </>
    )
}
