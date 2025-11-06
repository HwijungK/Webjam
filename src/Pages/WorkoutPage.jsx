import { exerciseDict } from "./exerciseDict"
import {useState} from "react"
import { getWorkout } from "../exercises"

const DAYS_OF_THE_WEEK = {
    0:"Monday",
    1:"Tuesday",
    2:"Wednesday",
    3:"Thursday",
    4:"Friday",
    5:"Saturday",
    6:"Sunday"
}

export default function WorkoutPage({height, weight, days}) {
    
    // Placeholder, Call function
    const [exercises, setExercises] = useState(
        [
            {
                exercise:"curls",
                target:"arms",
                muscles:"biceps",
                img_src:"https://m.media-amazon.com/images/I/61FTVcs11vL._AC_UF894,1000_QL80_.jpg"
            },
            {
                exercise: exerciseDict.chest.chest1[0],
                target: exerciseDict.chest.chest1[4],
                muscles: exerciseDict.chest.chest1[3],
                img_src: exerciseDict.chest.chest1[1]
            }
        ]
    )

    const workoutReturnObject = getWorkout(height, weight, days)
    const workout = workoutReturnObject.workout
    const targetByDay = workoutReturnObject.target

    return (
        <>
            <h1>Workout</h1>
            <div className="workout-container">
                {workout.map((day, i) => {
                    if (day.length > 0) {
                        return <DayContainer exercises={day} dayName={DAYS_OF_THE_WEEK[i]} target={targetByDay[i]}></DayContainer>
                    }
                })}
            </div>
        </>
    )
}

function DayContainer({dayName, exercises, target}) {
    // exercises is a list of lists[name, image, video, equipment, muscle group, sets, reps]
    console.log (exercises)
    

    return (
        <div>
            <h2>{dayName}</h2>
            <h3>{[...new Set(target)].join(", ")}</h3>
            {exercises.map((e) => {
                
                // console.log(`sets: ${e[8]}, reps: ${e[7]}`)
                return <WorkoutCard key = {e[0]} exercise={e[0]} target={e[4]} img_src={e[1]} video={e[2]} reps={e[6]} sets={e[5]} ></WorkoutCard>
            })}
        </div>
        
    )
}

// abs, arms, legs, chest, back, cardio
function WorkoutCard({exercise, target, reps, sets, img_src, video}) {
    
    return(
        <div className="workout-card">
            <h2>{exercise}</h2>
            <h3>Target: {target}</h3>
            <h3>{sets} sets; {reps} reps</h3>
            <a href={video}>
                <img src={img_src}></img>
            </a>
        </div>
    )
}


