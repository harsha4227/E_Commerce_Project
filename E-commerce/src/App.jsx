import React from 'react'
import'./app.css'
import LandingPage from './stores/pages/LandingPage'
import { Routes, Route} from "react-router-dom"
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import Computers from './stores/pages/Computers'
import Watches from './stores/pages/Watches'
import MenClothing from './stores/pages/MenClothing'
import WomanDressing from './stores/pages/WomanDressing'
import Furniture from './stores/components/Furniture'
import AC from './stores/components/AC'
import Fridge from './stores/pages/Fridge'
import Speaker from './stores/pages/Speaker'
import TV from './stores/pages/TV'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/abc" element={<Kitchen/>} />
        <Route path="/mobiles" element={<MobilePage/>} />
        <Route path="/computers" element={<Computers/>} />
        <Route path="/watches" element={<Watches/>} />
        <Route path="/men" element={<MenClothing/>} />
        <Route path="/woman" element={<WomanDressing/>} />
        <Route path="/furniture" element={<Furniture/>} />
        <Route path="/ac" element={<AC/>} />
        <Route path="/kitchen" element={<Kitchen/>} />
        <Route path="/fridge" element={<Fridge/>} />
        <Route path="/speaker" element={<Speaker/>} />
        <Route path="/tv" element={<TV/>} />
          <Route path='/mobiles/:id' element= {<MobileSingle/>} />
        <Route path='/cart' element={<UserCart />}/>



        

      </Routes>
    </div>
  )
}

export default App
