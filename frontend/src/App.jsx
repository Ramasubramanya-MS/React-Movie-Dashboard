import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/moviecard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
function App() {
  return (
    // Return only one parent element
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/favorites" element = {<Favorites />} />
        </Routes>
      </main>
    </div>

  )
}



export default App
