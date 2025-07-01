import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Tombol from './components/Tombol'
// import { InputText } from './components/InputTeks'
// import { Paragraf } from './components/Paragraf'
// import { Header } from './components/Header';
// import { Gambar } from './components/Gambar'
// import gambar from "./assets/faza-removebg-preview.png"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Todo from './pages/Todo'
import Contact from './pages/Contact'
import User from './pages/User'
import Photos from './pages/Photos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index element={<Home/>}/>
                 <Route path='About' element={<About/>}/>
                <Route path='Todo' element={<Todo/>}/>
                <Route path='Contact' element={<Contact/>}/>
                <Route path='User' element={<User/>}/>
                <Route path='Photos' element={<Photos/>}/>
            </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
