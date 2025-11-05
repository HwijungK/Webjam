
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './Pages/SearchPage'
import WorkoutPage from './Pages/WorkoutPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/Webjam" exact element={<SearchPage/>}/>
        <Route path="/Webjam/WorkoutPage" exact element={<WorkoutPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
