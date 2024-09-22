
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Common/Header'

function App() {

  return (
    <>
    <Header/>
     <Outlet></Outlet> 
    </>
  )
}

export default App
