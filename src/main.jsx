import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import BackgroundBeams from './components/ui/BackgroundBeams.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="home" className="relative min-h-screen overflow-hidden bg-[#020408] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[104px_104px] opacity-18" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(165deg,transparent_0px,transparent_28px,rgba(255,255,255,0.03)_29px,transparent_30px)] opacity-20" />
        <BackgroundBeams className="fixed inset-0 opacity-38" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="w-full pb-16">
          <Hero />
          <About />
          <Skills/>
          <Projects />
          <Contact />
        </main>
      </div> 
    </div>
  </StrictMode>,
)
