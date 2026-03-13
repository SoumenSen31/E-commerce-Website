import { Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import React from 'react'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <div>
      <div className='sticky top-0 z-50'>
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={ <Home/>}/>
         <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
