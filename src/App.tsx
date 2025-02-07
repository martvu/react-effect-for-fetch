import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import React from 'react'

function App() {
  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
      <AdviceSection /> 
    </div>
  )
}

export default App
