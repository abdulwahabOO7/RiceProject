import Header from './components/Header'
import VideoHero from './components/VideoHero'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import OurProducts from './components/OurProducts'
import InternationalBrand from './components/InternationalBrand'
import SafeenaStory from './components/SafeenaStory'
import DeliveringTo from './components/DeliveringTo'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import FallingRice from './components/FallingRice'
import './App.css'

function App() {
  return (
    <div className="app">
      <FallingRice />
      <Header />
      <VideoHero />
      <Hero />
      <BestSellers />
      <OurProducts />
      <InternationalBrand />
      <SafeenaStory />
      <DeliveringTo />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
