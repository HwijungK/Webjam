import { exerciseDict } from "./exerciseDict"

export default function WorkoutPage() {
    return (
        <>
            <h1>Workout</h1>
            <WorkoutCard exercise="pullUps" reps="7"></WorkoutCard>
            <WorkoutCard exercise="chestPress" reps="8"></WorkoutCard>
        </>
    )
}


function WorkoutCard({exercise, reps}) {

    return(
        <div className="workout-card">
            <h2>{exercise}</h2>
            <h3>Target: {exerciseDict[exercise].target}</h3>
            <h3>3 sets; {reps} reps</h3>
        </div>
    )
}


