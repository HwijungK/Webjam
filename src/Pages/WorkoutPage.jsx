import { exerciseDict } from "./exerciseDict"

export default function WorkoutPage() {
    return (
        <>
            <h1>Workout</h1>
            <WorkoutCard exercise="pullUps" target="back" reps="7"></WorkoutCard>
            <WorkoutCard exercise="chestPress" target="chest" reps="8"></WorkoutCard>
        </>
    )
}

// abs, arms, legs, chest, back, cardio
function WorkoutCard({exercise, target, reps}) {

    return(
        <div className="workout-card">
            <h2>{exercise}</h2>
            <h3>Target: {target}</h3>
            <h3>3 sets; {reps} reps</h3>
        </div>
    )
}


