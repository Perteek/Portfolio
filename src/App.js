import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Contact from "./components/Contact"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/About'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <><Navbar/></>
    <Routes>
      <Route Exact path="/" element={<><Home/></>}></Route>
      <Route Exact path="/about" element={<><About/></>}></Route>
      <Route Exact path="/contact" element={<><Contact/></>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
