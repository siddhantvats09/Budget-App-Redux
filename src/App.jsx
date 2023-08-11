import React from 'react'
import './App.css'
import Home from './components/Home'
import { Routes,BrowserRouter,Route } from 'react-router-dom'
import Budgetcreationpage from './components/Budgetcreationpage'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Budgetcreationpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
