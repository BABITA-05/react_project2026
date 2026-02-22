import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FoodMenu from './pages/FoodMenu'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Home/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path='foodMenu' element={<FoodMenu/>}></Route>

      </Route>
     </Routes>
    </BrowserRouter>
    
   
  </StrictMode>,
)
