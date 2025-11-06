
import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './Pages/SearchPage'
import WorkoutPage from './Pages/WorkoutPage'
import {useState} from 'react'
import { getWorkout } from './exercises'

function App() {

  const [height, setHeight] = useState(72)
  const [weight, setWeight] = useState(144)
  const [days, setDays] = useState(3)
  const [isWorkoutPage, setIsWorkoutPage] = useState(false)

  function onSwitchPage() {
    
    setIsWorkoutPage(true)
  }

  return (
    <>
      {isWorkoutPage? 
      <WorkoutPage
        height={height} weight={weight} days={days}
      ></WorkoutPage>
      :<SearchPage
        height={height} weight={weight} days={days}
        setHeight={setHeight} setWeight={setWeight} setDays={setDays}
        onSwitchPage={onSwitchPage}
      ></SearchPage>}
      
    </>
    
    // <Router>
    //   <Routes>
    //     <Route index path="/Webjam" exact element={<SearchPage/>}/>
    //     <Route path="/Webjam/WorkoutPage" exact element={<WorkoutPage />}></Route>
    //   </Routes>
    // </Router>
  )
}

export default App
