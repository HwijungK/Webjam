import { useState } from 'react'


function Form({height, weight, days, setHeight, setWeight, setDays}) {
  function handleSubmit(event) {
    event.preventDefault()
    console.log(height.toString() + weight.toString() + days.toString())
  }

  return (
    <>
      <h1>Welcome to Webjam</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">Height</label> <br/>
        <input type="number" id="height" name="height" value={height} onChange={(event) => {setHeight(event.target.value)}}></input> <br/>
        <label htmlFor="weight">Weight</label> <br/>
        <input type="number" id="weight" name="weight" value={weight} onChange={(event) => {setWeight(event.target.value)}}></input> <br/>
        <label htmlFor="days">Days</label> <br/>
        <input type="numbers" id="days" name="days" value={days} onChange={(event) => (setDays(event.target.value))}></input> <br/>

        <a href="/Webjam/WorkoutPage">
            to workout
        </a>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}


export default function SearchPage() {
    const [height, setHeight] = useState(72)
    const [weight, setWeight] = useState(144)
    const [days, setDays] = useState(3)

    return (
        <>
        <Form 
            height={height}
            weight={weight}
            days={days}
            setHeight={setHeight}
            setWeight={setWeight}
            setDays={setDays}
        />
        </>
    )
}