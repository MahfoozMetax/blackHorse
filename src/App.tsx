
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/Home'
import NavBar from './components/global/NavBar'
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import ShowCaseSection from './components/Showcase'
import Footer from './components/global/Footer'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/showcase' element={<ShowCaseSection />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
