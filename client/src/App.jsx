import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import LandingPage from './Pages/LandingPage';
import Visualization from './Visualization';

function App() {
  return (
    <>
    <div>
    <Router>
      <Routes>
          <Route index element={<Main />} />
          <Route path="/Visualization" element={<Visualization/>} />
          <Route path="/LandingPage" element={<LandingPage/>} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Main"element={<Main />} />
          <Route path="/SignupPage"element={<SignupPage />} />
          
      </Routes>
    </Router>
    </div>
     
    </>
  )
}

export default App
