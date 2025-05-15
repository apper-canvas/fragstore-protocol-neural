import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import getIcon from './utils/iconUtils';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Initialize dark mode from localStorage or system preference
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const MoonIcon = getIcon('Moon');
  const SunIcon = getIcon('Sun');
  const ShoppingCartIcon = getIcon('ShoppingCart');
  const MenuIcon = getIcon('Menu');

  // Update document with dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Navigation state
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-sm dark:bg-secondary/90">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mr-2 flex items-center"
              >
                <div className="size-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-white">F</span>
                </div>
                <span className="ml-2 font-heading text-xl font-bold">
                  <span className="text-primary">Frag</span>
                  <span className="dark:text-white">Store</span>
                </span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#featured" className="text-surface-800 hover:text-primary transition dark:text-surface-200">Featured</a>
              <a href="#latest" className="text-surface-800 hover:text-primary transition dark:text-surface-200">Latest</a>
              <a href="#categories" className="text-surface-800 hover:text-primary transition dark:text-surface-200">Categories</a>
              <a href="#contact" className="text-surface-800 hover:text-primary transition dark:text-surface-200">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="rounded-full p-2 text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-secondary-light"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? 'dark' : 'light'}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {darkMode ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
                  </motion.div>
                </AnimatePresence>
              </button>

              <button 
                className="relative rounded-full p-2 text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-secondary-light"
                aria-label="Shopping cart"
              >
                <ShoppingCartIcon className="size-5" />
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  3
                </span>
              </button>

              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="rounded-lg p-2 text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-secondary-light md:hidden"
                aria-label="Toggle menu"
              >
                <MenuIcon className="size-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-surface-200 dark:border-surface-700"
            >
              <div className="container mx-auto px-4 py-3">
                <div className="flex flex-col space-y-3">
                  <a 
                    href="#featured" 
                    className="p-2 text-surface-800 hover:text-primary dark:text-surface-200"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Featured
                  </a>
                  <a 
                    href="#latest" 
                    className="p-2 text-surface-800 hover:text-primary dark:text-surface-200"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Latest
                  </a>
                  <a 
                    href="#categories" 
                    className="p-2 text-surface-800 hover:text-primary dark:text-surface-200"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Categories
                  </a>
                  <a 
                    href="#contact" 
                    className="p-2 text-surface-800 hover:text-primary dark:text-surface-200"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">FragStore</h3>
              <p className="text-surface-300">
                Premium CS2 merchandise for true gamers.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Shop</h4>
              <ul className="space-y-2 text-surface-300">
                <li><a href="#" className="hover:text-primary">All Products</a></li>
                <li><a href="#" className="hover:text-primary">New Arrivals</a></li>
                <li><a href="#" className="hover:text-primary">Best Sellers</a></li>
                <li><a href="#" className="hover:text-primary">On Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Information</h4>
              <ul className="space-y-2 text-surface-300">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
                <li><a href="#" className="hover:text-primary">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Get In Touch</h4>
              <p className="mb-2 text-surface-300">
                Subscribe to our newsletter for updates on new products and special offers.
              </p>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full rounded-l-lg border-0 bg-surface-800 px-4 py-2 text-white placeholder-surface-500 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="rounded-r-lg bg-primary px-4 py-2 font-medium text-white hover:bg-primary-dark">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-surface-700 pt-6 text-center text-surface-400">
            <p>© {new Date().getFullYear()} FragStore. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Toast Container Configuration */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? 'dark' : 'light'}
        toastClassName="shadow-lg rounded-xl"
      />
    </div>
  );
}

export default App;