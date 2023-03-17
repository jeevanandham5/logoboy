
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Ratingpage from './components/Rating'
import Making from './components/Making'
import Loby from './components/Loby'


const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Ratingpage/>
    <Loby/>
    <Making/>
    <Routes>
    <Route path="Home/"element={<Home/>}/>
    
    </Routes>
    </>
  )
}

export default App