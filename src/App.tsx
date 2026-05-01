import About from './sections/About'
import RotatingBadge from './sections/Badge'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Journey from './sections/Journey'
import Projects from './sections/Projects'

function App() {

  return (
    <>
      <Header></Header>
      <div className="[--marquee-speed:18s] sm:[--marquee-speed:25s] lg:[--marquee-speed:30s]">
        <RotatingBadge />
      </div>
      <About></About>
      <Projects></Projects>
      <Journey></Journey>
      <Contact></Contact>
      <Footer></Footer>

    </>
  )
}

export default App
