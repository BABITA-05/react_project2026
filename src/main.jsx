import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FoodMenu from './pages/FoodMenu'
import ControlledFormExample from './pages/ControlFormExample'
import UnControlledFormExample from './pages/UnControlFormExample'
import ForgotPassword from './pages/ForgotPassword'
import FormValidation from './day8/FormValidation'
import UseEffectHook from './day9/UseEffectHook'
import UseEffectWithCleanup from './day9/UseEffectWithCleanup'
import UseContexHook from './day9/UseContexHook'
import SecondContext from './day9/SecondContext'
import UseMemoComponent from './day9/UseMemoComponent'
import UseCallbackComponent from './day9/UseCallbackComponent'
import TodoExample from './day9/TodoExample'
import UseReducerHookExample from './day9/UseReducerHookExample'
import CompA from './day11/Users'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Home/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path='foodMenu' element={<FoodMenu/>}></Route>
      <Route path="cForm" element={<ControlledFormExample/>}></Route>
      <Route path="ucForm" element={<UnControlledFormExample/>}></Route>
      <Route path="fp" element={<ForgotPassword/>}></Route>
      <Route path="form-valid" element={<FormValidation/>}></Route>
      <Route path="useEffect" element={<UseEffectHook/>}></Route>
      <Route path="useEffectcleanup" element={<UseEffectWithCleanup/>}></Route>
      <Route path="contexthook" element={<UseContexHook/>}></Route>
      <Route path="secondContext" element={<SecondContext/>}></Route>
      <Route path="usememo" element={<UseMemoComponent/>}></Route>
      <Route path="usecallback" element={<UseCallbackComponent/>}></Route>
      <Route path="todo" element={<TodoExample/>}></Route>
      <Route path="reducerhook" element={<UseReducerHookExample/>}></Route>
      <Route path="comp" element={<CompA/>}></Route>

      </Route>
     </Routes>
    </BrowserRouter>
    
   
  </StrictMode>,
)
