import { useEffect, useState } from 'react'
import { Header, Hero, About, Skills, Projects, Contact, Footer, LoadingScreen } from './components'
import { Toaster } from 'react-hot-toast'
import Lenis from 'lenis'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize Lenis smooth scrolling after loading is complete
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })

      // Animation frame loop for Lenis
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // Cleanup
      return () => {
        lenis.destroy()
      }
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <>
     <div className=' z-10'>
       <Header />
     </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      />
    </>
  )
}

export default App
