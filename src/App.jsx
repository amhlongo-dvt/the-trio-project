import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { resultsData } from './mockData/Mock'
import ResultsMain from './components/ResultsMain'

function App() {
  

  return (
    <>
      <ResultsMain resultsData={resultsData} />
    </>
  )
}

export default App
