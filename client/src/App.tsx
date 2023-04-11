import { useState } from 'react'
import './styles/main.css'
import './styles/reset.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Onboarding1 from './pages/gettingStarted/gettingStarted1/Onboarding-1';
import Onboarding2 from './pages/gettingStarted/gettingStarted2/Onboarding-2';
import Onboarding3 from './pages/gettingStarted/gettingStarted3/Onboarding-3';
import StartScreen from './pages/gettingStarted/startScreen/StartScreen';

import Home from './pages/home/Home';
import ConnectTheWallet from './pages/connectWallet/ConnectTheWallet';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/guide/1' element={<Onboarding1 />}></Route>
          <Route path='/guide/2' element={<Onboarding2 />}></Route>
          <Route path='/guide/3' element={<Onboarding3 />}></Route>
          <Route path='/start' element={<StartScreen />}></Route>


          <Route path='/connect-wallet' element={<ConnectTheWallet />}></Route>

          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
