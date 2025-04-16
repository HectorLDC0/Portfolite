import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Hero/Hero'
import Services from './components/Services_Section/services'
import Projects from './components/Project_Section/Projects'
import Footer from './components/Footer/Footer'
import TestimonialCarousel from './components/Testimonials/TestimonialCarousel'

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <section>
        <Main />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <TestimonialCarousel />
      </section>

    </>
  )
}

export default App
