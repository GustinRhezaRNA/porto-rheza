import { motion } from 'framer-motion'
import type { MetaFunction } from 'react-router'
import About from '@/sections/About'
import RotatingBadge from '@/sections/Badge'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Journey from '@/sections/Journey'
import Projects from '@/sections/Projects'
import Services from '@/sections/Services'
import { reveal } from '@/lib/motion'

const DESCRIPTION =
  "Gustin Rheza is a Software Engineer based in Indonesia, building and shipping digital products end-to-end with React, Next.js, NestJS, TypeScript, and modern web technologies."

// Emitted into the prerendered HTML at build time, so crawlers that don't run
// JS still get real title/description/canonical tags.
export const meta: MetaFunction = () => [
  { title: 'Gustin Rheza | Software Engineer' },
  { name: 'description', content: DESCRIPTION },
  {
    name: 'keywords',
    content:
      'Gustin Rheza, Software Engineer, Full-Stack Engineer, Product Engineer, React, Next.js, NestJS, TypeScript, FastAPI, GraphQL, PostgreSQL, Indonesia',
  },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://gustinrheza.com/' },
  { property: 'og:title', content: 'Gustin Rheza | Software Engineer' },
  {
    property: 'og:description',
    content:
      'Software Engineer building and shipping digital products end-to-end, from frontend experiences and backend systems to deployment and production.',
  },
  { name: 'twitter:title', content: 'Gustin Rheza | Software Engineer' },
  {
    name: 'twitter:description',
    content:
      'Software Engineer building and shipping digital products end-to-end with modern web technologies.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://gustinrheza.com/' },
]

const HomePage = () => {
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

      {/* Not wrapped in `reveal`: Projects staggers its own cards internally.
          Wrapping a multi-screen-tall section in a single whileInView fade
          also risks the section never triggering. */}
      <Projects />

      <motion.div {...reveal}>
        <Journey />
      </motion.div>

      <Footer />
    </>
  )
}

export default HomePage
