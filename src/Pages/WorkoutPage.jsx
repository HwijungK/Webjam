import { exerciseDict } from "./exerciseDict"
import {useState} from "react"

export default function WorkoutPage({height, weight, days}) {

    // Call Function
    const [exercises, setExercises] = useState(
        [
            {
                exercise:"curls",
                target:"arms",
                muscles:"biceps",
                img_src:"https://m.media-amazon.com/images/I/61FTVcs11vL._AC_UF894,1000_QL80_.jpg"
            },
            {
                exercise:chest1,
                target:"chest",
                muscles:"chestButMoreSpecific",
                img_src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD19fXq6uqtra3l5eWgoKCJiYn7+/va2trW1tZcXFzs7OyBgYHn5+dERERwcHDGxsYmJiYQEBBlZWUVFRWxsbHOzs4uLi6Tk5OlpaVXV1fIyMi/v7+4uLiZmZkdHR02NjZ2dnY8PDxOTk6FhYVJSUkju99jAAAD+klEQVR4nO3c2XaqMBQG4KKioogTDuCItr7/I55qTwtsAiEGSbbr/271Yv9LyBw/PgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFtnfppNz47jLJMwOnRMl9O00WDh5CV933RRzemclo7IeGS6smb4F2G8h0/XdHX6OhX57iamC9TVr853b3c80zXqCBJpwG8902U+r5f9qSbHket68/6uGHFgutBnhWmGbKs57K1oxIu5IjV0tn8BFvRVK7ydHNubIC3/q/hpl/b//fYr1OSlxa+FX7iSiJuWC9TlpqUfS76yJRGHrRaoq5sWXtoVdEjCcZsF6soUX9GEzEnEQ3sFaksfwG3V18YkYlvl6cv0g5UD64AkjNsqUFec1iwZrIQkYjv1afPql7whCcuaXcuc04ql3ThJOG2jPm0DladuRiJyWNfIdPU1pgw9kpBDW3PL1BtIvz0iCXctVKhpr/ZW0XENg9Y0O9isM3WnCa1fmDqoNhs04fzlJWpKMsVWDth+0YS2NzW5hqPW4gtNGL26RE25UVidB45OL2xfzci3jDW2XmhnIVzwsEm+/x52/IfAdV3PG33bzw/H9boXn6JoMJmFY8FmhuUJp8WKVdnd0hS67yfYvcJ/1A/4aTpDNTpRUBeajiChFW6xm8Rd0wkkuvIYNNU0vET949zr8lgrPUgTrbbT8ewr6q8PG6/L8KRClEuz3O3C2eQ7Ttw77jde4PP4mSrlF84Wpst5gXMu4dl0OS9AXjrT5TSPjmhM19M8lyR8g5aFoDMh+UIbN3Qyy21PV452+Ez2IBTQhLavuKijCW2fJ6ijCVemC2rcniSssxLFi0cT7k1X1DS6Kc/3OF6ZIU34frMLmtCxfVFC2Y0m5HcYT2JCE9bafOKE7snbvryrrtBdODPTJTWtkJDF4REVxSPqPI9vl4uLP+KbTYMLoxrrd1qU0XPNztvNgwWP6ZvNMERbpInpoppFT8Te1e8ULT+H8VDs9J3as6jhlcV86/PpiMH9YAaDSXPxgMxdjY7//xkABoMgesHgx1TSog5/X2C7D5s8+MKEktsif4c4WAzVTyURy680b/7ueN3aLPR5SUlEJxROFw/pHTYuCzsVRzISep5kk10XWLLZj6s8GrW6xHPP9QNvsx7kF3aWjMZ3g5J0lVaMAooHbxJbNo/oD8GF9Gr85pGKvyKHMTf1pRKQ5zR5XTvfluvqv0tv3JfgvBseyeM5U+uvAVXyxTON1IrT9W0xr6pRPYv/bIEbPxL/RZSzs/4SV31eRP8Dw7nFDGbzaka9QXh9nEDdhqc9syEaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAr394eSQfC0lHYgAAAABJRU5ErkJggg=="

            }
        ]
    )

    return (
        <>
            <h1>Workout</h1>
            <div className="workout-container">
                {exercises.map(e => {
                    return (
                        <>
                            <WorkoutCard exercise={e.exercise} target={e.target} reps={10} img_src={e.img_src}></WorkoutCard>
                        </>
                    )
                })}
            </div>
        </>
    )
}

// abs, arms, legs, chest, back, cardio
function WorkoutCard({exercise, target, reps, img_src}) {

    return(
        <div className="workout-card">
            <h2>{exercise}</h2>
            <h3>Target: {target}</h3>
            <h3>3 sets; {reps} reps</h3>
            <img src={img_src}></img>
        </div>
    )
}


