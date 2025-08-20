
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Insert from './Pages/Insert'

function App() {
 
  return (
    <>
     <h1>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='insert' element={<Insert/>}/>

      </Route>
     </Routes>
     </BrowserRouter>


     </h1>
    </>
  )
}

export default App
