import { useEffect, useState } from "react";
import { timeFormatter } from "./timeFormatter";


export const ReadIt = ({ events }) => {
    const [toSpeak, setToSpeak] = useState("")

    useEffect(() => {
        if (toSpeak !== "") {

            window.speechSynthesis.speak(toSpeak)

        }
        
    }, [toSpeak]
    )

    const speechWriter = () => {
        const speech = new SpeechSynthesisUtterance()
        speech.voice = window.speechSynthesis.getVoices()[2]

        let eventStringArray = events.map((e, i) => {
            return `Event ${i + 1}, ${e.name}. ${e.description} at ${e.location} from ${timeFormatter(e.startDateTime)} to ${timeFormatter(e.endDateTime)}.`
        })

        speech.text = eventStringArray.join()

        return setToSpeak(speech)
    }

    return <>{
        window.hasOwnProperty('speechSynthesis') ?
            <>
                <div>yes</div>
                <button onClick={() => speechWriter()}>speak</button>
                <button onClick={() => window.speechSynthesis.cancel}>Cancel</button>
            </>
            : <></>
    }</>

}