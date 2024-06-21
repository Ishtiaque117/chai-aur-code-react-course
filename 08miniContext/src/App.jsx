import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Hello My name is Ishtiaque</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
