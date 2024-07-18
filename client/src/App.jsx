import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer'
import Header from './components/Header'
import Library from './pages/Library'
import Signup from './pages/Signup'

import Plogin from './pages/partner/Plogin'
import Addlib from './components/Addlib'
import Dashboard from './pages/partner/Dashboard'
import Partner from './pages/partner/Partner'
export default function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>  
      
      <Routes>
          <Route  path='/'
                  element={<Home/>} />

          <Route  path='login'
                  element={<Login/>} />
          <Route  path='signup'
                  element={<Signup/>} />
          <Route  path='partner'
                  element={<Partner/>} />
          <Route  path='plogin'
                  element={<Plogin/>} />

          <Route  path='dashboard'
                  element={<Dashboard/>} />
                  
         <Route  path='addlib'
                  element={<Addlib/>} />



          <Route  path='/library/:libraryId'
                  element={<Library/>} />
          
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}