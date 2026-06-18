import { motion } from 'framer-motion'
import About from './sections/About'
import RotatingBadge from './sections/Badge'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Journey from './sections/Journey'
import Projects from './sections/Projects'
import Services from './sections/Services'

const reveal = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true, amount: 0.15 },
}

function App() {
  return (
    <>
      <Header />

      <div className="[--marquee-speed:18s] sm:[--marquee-speed:25s] lg:[--marquee-speed:30s]">
        <RotatingBadge />
      </div>

      <motion.div {...reveal}>
        <About />
      </motion.div>

      <motion.div {...reveal}>
        <Services />
      </motion.div>

      <motion.div {...reveal}>
        <Projects />
      </motion.div>

      <motion.div {...reveal}>
        <Journey />
      </motion.div>

      <Footer />
    </>
  )
}

export default App
