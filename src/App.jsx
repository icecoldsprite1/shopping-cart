import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <NavigationBar/>
      <Outlet/>
    </>
  )
}
export default App
