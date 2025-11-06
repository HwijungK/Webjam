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
                img_src: chest1[3]
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


