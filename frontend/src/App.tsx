import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-900/90 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                AIDD
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'text-accent-400' 
                    : 'text-white hover:text-accent-300'
                }`}
              >
                Accueil
                {location.pathname === '/' && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-accent-600"></div>
                )}
              </Link>
              <a
                href="#features"
                className="text-white hover:text-accent-300 px-4 py-2 text-sm font-medium transition-all duration-300"
              >
                Fonctionnalités
              </a>
              <a
                href="#pricing"
                className="text-white hover:text-accent-300 px-4 py-2 text-sm font-medium transition-all duration-300"
              >
                Tarifs
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
