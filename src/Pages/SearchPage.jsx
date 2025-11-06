import { useState } from 'react'


function Form({height, weight, days, setHeight, setWeight, setDays, onSwitchPage}) {

  function handleSubmit(event) {
    event.preventDefault()
    console.log(height.toString() + weight.toString() + days.toString())
    onSwitchPage(); 
  }

  return (
    <>
      <h1>Welcome to our Webjam</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">Enter Your Height(in)</label> <br/>
        <input type="number" id="height" name="height" value={height} onChange={(event) => {setHeight(event.target.value)}}></input> <br/>
        <label htmlFor="weight">Enter Your Weight(lb)</label> <br/>
        <input type="number" id="weight" name="weight" value={weight} onChange={(event) => {setWeight(event.target.value)}}></input> <br/>
        <label htmlFor="days">How Many Days Do You Want To Work Out?</label> <br/>
        <input type="numbers" id="days" name="days" value={days} onChange={(event) => (setDays(event.target.value))}></input> <br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

function bmi(weight, height) {
  return (weight / (height * height));
}

export default function SearchPage({height, weight, days, setHeight, setWeight, setDays, onSwitchPage}) {

    return (
        <>
        <Form 
            height={height}
            weight={weight}
            days={days}
            setHeight={setHeight}
            setWeight={setWeight}
            setDays={setDays}
            onSwitchPage={onSwitchPage}
        />
        </>
    )
}