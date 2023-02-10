import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
