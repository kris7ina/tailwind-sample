import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <div className='animate-fade animate-once animate-duration-[3000ms] animate-delay-200'>
      <Navbar />
      <Hero />
    </div>
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  )
}

export default App