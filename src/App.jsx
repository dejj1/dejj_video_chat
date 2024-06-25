
import './App.css'
import About from './components/About'
import ChatButton from './components/ChatButton'
import ExtraBanner from './components/ExtraBanner'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Store from './components/Store'

function App() {
 

  return (
    <div >
      <Navbar/>
      <Hero/>
      <Store/>
      <ExtraBanner/>
      <About/>
      <Footer/>
      <ChatButton/>
    </div>
  )
}

export default App
