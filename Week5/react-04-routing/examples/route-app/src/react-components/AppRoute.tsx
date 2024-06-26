import { Route, Routes } from 'react-router-dom'
import Aboutus from '../views/Aboutus'
import Contactus from '../views/Contactus'
import Home from '../views/Home'
import Blog from '../views/Blog'

export default function AppRoute() {
  return (
    <Routes>
        <Route path='/home' element={<Home/>} />
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:id' element={<Blog />} />

    </Routes>
  )
}
