import { motion } from 'framer-motion'
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

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ amount: 0.2 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <Journey />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "circOut" }}
        viewport={{ amount: 0.2 }}
      >
        <Contact />
      </motion.div>

      <Footer></Footer>
    </>
  )
}

export default App
