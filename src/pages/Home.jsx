import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';
import MainFeature from '../components/MainFeature';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  
  // Icons
  const ShoppingBagIcon = getIcon('ShoppingBag');
  const StarIcon = getIcon('Star');
  const TruckIcon = getIcon('Truck');
  const ShieldIcon = getIcon('Shield');
  const SearchIcon = getIcon('Search');
  const HeadphonesIcon = getIcon('Headphones');
  const MouseIcon = getIcon('Mouse');
  const TShirtIcon = getIcon('Shirt');
  const TagIcon = getIcon('Tag');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };
  
  // Fetch mock featured products
  useEffect(() => {
    // Simulating API call with setTimeout
    const timer = setTimeout(() => {
      const mockProducts = [
        {
          id: 1,
          name: "CS2 Pro Player Jersey",
          description: "Official tournament-grade jersey worn by professional players",
          price: 79.99,
          image: "https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          category: "Apparel",
          rating: 4.8,
          inStock: true
        },
        {
          id: 2,
          name: "AWP Dragon Lore Mousepad XL",
          description: "Premium extended mousepad with the legendary Dragon Lore skin design",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          category: "Accessories",
          rating: 4.9,
          inStock: true
        },
        {
          id: 3,
          name: "Tactical Gaming Headset",
          description: "Hear every footstep with precision clarity",
          price: 129.99,
          image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          category: "Equipment",
          rating: 4.7,
          inStock: true
        },
        {
          id: 4,
          name: "AK-47 Fire Serpent Collectible",
          description: "Limited edition collectible replica inspired by the iconic Fire Serpent skin",
          price: 149.99,
          image: "https://images.pixabay.com/photo/2016/03/27/14/31/gaming-1282909_960_720.jpg",
          category: "Collectibles",
          rating: 4.6,
          inStock: false
        },
        {
          id: 5,
          name: "Pro Gaming Mouse",
          description: "High-precision gaming mouse used by CS2 professionals",
          price: 69.99,
          image: "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          category: "Equipment",
          rating: 4.8,
          inStock: true
        },
        {
          id: 6,
          name: "CS2 Championship Hoodie",
          description: "Commemorative hoodie from the last major championship",
          price: 89.99,
          image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          category: "Apparel",
          rating: 4.7,
          inStock: true
        }
      ];
      
      setFeaturedProducts(mockProducts);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleAddToCart = (product) => {
    toast.success(`${product.name} added to cart!`, {
      icon: <ShoppingBagIcon className="text-primary" />
    });
  };
  
  // Categories
  const categories = [
    { name: "Apparel", icon: TShirtIcon, count: 42 },
    { name: "Equipment", icon: HeadphonesIcon, count: 36 },
    { name: "Mousepads", icon: MouseIcon, count: 18 },
    { name: "Collectibles", icon: TagIcon, count: 24 }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-secondary-light overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}></div>
        
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:max-w-lg lg:mr-12"
            >
              <h1 className="mb-4 font-bold leading-tight text-white">
                <span className="text-gradient">Level Up</span> Your Gaming Experience
              </h1>
              <p className="mb-8 text-lg text-surface-300 md:text-xl">
                Premium CS2 merchandise for true gamers. From pro-quality gear to exclusive collectibles.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a 
                  href="#featured" 
                  className="btn btn-primary px-8 py-3 text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all"
                >
                  Shop Now
                </a>
                <a 
                  href="#latest" 
                  className="btn border-2 border-white/20 bg-white/10 px-8 py-3 text-lg text-white backdrop-blur-sm hover:bg-white/20 focus:ring-white"
                >
                  New Arrivals
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 lg:mt-0"
            >
              <div className="relative rounded-2xl bg-gradient-to-r from-primary to-accent p-1 shadow-2xl">
                <div className="rounded-xl bg-secondary p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="CS2 Gaming Setup" 
                    className="h-full w-full rounded-lg object-cover md:max-w-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Value Propositions */}
      <section className="bg-white py-10 dark:bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center rounded-xl bg-surface-50 p-6 text-center shadow-soft dark:bg-secondary"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <TruckIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-semibold">Fast Delivery</h3>
              <p className="text-surface-600 dark:text-surface-400">Free shipping on orders over $50</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center rounded-xl bg-surface-50 p-6 text-center shadow-soft dark:bg-secondary"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <ShieldIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-semibold">Secure Payments</h3>
              <p className="text-surface-600 dark:text-surface-400">100% secure payment processing</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center rounded-xl bg-surface-50 p-6 text-center shadow-soft dark:bg-secondary"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <StarIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-semibold">Premium Quality</h3>
              <p className="text-surface-600 dark:text-surface-400">Officially licensed CS2 products</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
    {/* Latest Products Section */}
    <section id="latest" className="py-16 bg-surface-50 dark:bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Latest Arrivals</h2>
          <p className="text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Check out our newest CS2 merchandise, fresh from the battlegrounds and ready for true gamers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="bg-white dark:bg-secondary rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-w-1 aspect-h-1 relative overflow-hidden bg-surface-100">
              <img 
                src="https://placehold.co/400x400/252935/FFFFFF/png?text=CS2+Pro+Keyboard" 
                alt="CS2 Pro Gaming Keyboard" 
                className="object-cover w-full h-60"
              />
              <div className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">NEW</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 dark:text-white">CS2 Pro Gaming Keyboard</h3>
              <p className="text-surface-600 dark:text-surface-400 text-sm mb-3">Tactile mechanical switches with custom CS2 keycaps</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg dark:text-white">$129.99</span>
                <button className="bg-primary hover:bg-primary-dark text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="bg-white dark:bg-secondary rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-w-1 aspect-h-1 relative overflow-hidden bg-surface-100">
              <img 
                src="https://placehold.co/400x400/252935/FFFFFF/png?text=Team+Jersey" 
                alt="Limited Edition Team Jersey" 
                className="object-cover w-full h-60"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">HOT</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 dark:text-white">Limited Edition Team Jersey</h3>
              <p className="text-surface-600 dark:text-surface-400 text-sm mb-3">Official tournament design with player name customization</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg dark:text-white">$89.99</span>
                <button className="bg-primary hover:bg-primary-dark text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="bg-white dark:bg-secondary rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-w-1 aspect-h-1 relative overflow-hidden bg-surface-100">
              <img 
                src="https://placehold.co/400x400/252935/FFFFFF/png?text=Tactical+Mousepad" 
                alt="Tactical Precision Mousepad" 
                className="object-cover w-full h-60"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 dark:text-white">Tactical Precision Mousepad</h3>
              <p className="text-surface-600 dark:text-surface-400 text-sm mb-3">Extended size with CS2 map designs and stitched edges</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg dark:text-white">$34.99</span>
                <button className="bg-primary hover:bg-primary-dark text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 4 */}
          <div className="bg-white dark:bg-secondary rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-w-1 aspect-h-1 relative overflow-hidden bg-surface-100">
              <img 
                src="https://placehold.co/400x400/252935/FFFFFF/png?text=Weapon+Skin+Mug" 
                alt="Weapon Skin Collection Mug" 
                className="object-cover w-full h-60"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 dark:text-white">Weapon Skin Collection Mug</h3>
              <p className="text-surface-600 dark:text-surface-400 text-sm mb-3">Heat-activated skin reveal when filled with hot liquid</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg dark:text-white">$24.99</span>
                <button className="bg-primary hover:bg-primary-dark text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg inline-flex items-center">
            View All Latest Products
          </button>
        </div>
      </div>
    </section>
    
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center rounded-xl bg-surface-50 p-6 text-center shadow-soft dark:bg-secondary"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <ShoppingBagIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-semibold">Easy Returns</h3>
              <p className="text-surface-600 dark:text-surface-400">30-day hassle-free returns</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-10 bg-surface-100 dark:bg-secondary">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-2xl">
            <div className="flex items-center rounded-xl border-2 border-primary/20 bg-white shadow-lg dark:bg-secondary-light">
              <input 
                type="text" 
                placeholder="Search for CS2 merchandise..." 
                className="w-full rounded-xl border-0 bg-transparent px-5 py-4 focus:outline-none dark:text-white"
              />
              <button className="px-5 py-4 text-primary">
    
    {/* Contact Section */}
    <section id="contact" className="py-16 bg-white dark:bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <p className="text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Have questions about our products or need gaming gear advice? We're here to help you dominate the CS2 battlegrounds.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-white">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-secondary-light dark:border-surface-700 dark:text-white" 
                placeholder="John Doe"
                required
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-white">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-secondary-light dark:border-surface-700 dark:text-white" 
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium mb-2 dark:text-white">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-secondary-light dark:border-surface-700 dark:text-white" 
                placeholder="How can we help you?"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-white">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-secondary-light dark:border-surface-700 dark:text-white" 
                placeholder="Tell us what you need..."
                required
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-sm text-surface-700 shadow-sm dark:bg-secondary-light dark:text-surface-300">
                Gaming Keyboards
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-sm text-surface-700 shadow-sm dark:bg-secondary-light dark:text-surface-300">
                Pro Jerseys
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-sm text-surface-700 shadow-sm dark:bg-secondary-light dark:text-surface-300">
                Weapon Skins
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-sm text-surface-700 shadow-sm dark:bg-secondary-light dark:text-surface-300">
                Collectibles
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section id="featured" className="py-16 bg-white dark:bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold">Featured Products</h2>
            <p className="mx-auto max-w-2xl text-surface-600 dark:text-surface-400">
              Discover our hand-picked selection of premium CS2 merchandise, designed for serious gamers and collectors.
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {featuredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl bg-surface-50 shadow-lg transition-all hover:shadow-xl dark:bg-secondary"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <span className="rounded-full bg-surface-800 px-4 py-2 font-semibold text-white">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <div className="flex items-center">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium">
                          {product.category}
                        </span>
                        <div className="ml-auto flex items-center">
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <span className="ml-1 text-sm">{product.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="mb-2 font-semibold">{product.name}</h3>
                    <p className="mb-4 text-surface-600 line-clamp-2 dark:text-surface-400">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className={`rounded-lg px-4 py-2 font-medium text-white transition-all ${
                          product.inStock 
                            ? 'bg-primary hover:bg-primary-dark' 
                            : 'cursor-not-allowed bg-surface-400'
                        }`}
                      >
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="btn btn-secondary px-8 py-3"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section id="categories" className="py-16 bg-surface-100 dark:bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold">Shop by Category</h2>
            <p className="mx-auto max-w-2xl text-surface-600 dark:text-surface-400">
              Browse our extensive collection of CS2 merchandise organized by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 transition-all duration-300 group-hover:opacity-80"
                  ></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <category.icon className="mb-3 h-12 w-12" />
                    <h3 className="mb-1 text-xl font-bold">{category.name}</h3>
                    <p className="text-center text-surface-200">{category.count} products</p>
                    <button className="mt-4 rounded-lg border-2 border-white bg-transparent px-4 py-2 font-medium text-white transition-all hover:bg-white hover:text-secondary">
                      Shop Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Feature Section */}
      <section className="py-16 bg-white dark:bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold">Customize Your Gear</h2>
            <p className="mx-auto max-w-2xl text-surface-600 dark:text-surface-400">
              Create your perfect CS2 gaming setup with our interactive configurator
            </p>
          </div>
          
          <MainFeature />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="lg:max-w-xl">
              <h2 className="mb-4 font-bold text-white">Join the FragStore Community</h2>
              <p className="mb-6 text-lg text-white/90">
                Sign up for our newsletter to receive exclusive offers, early access to new products, and CS2 tournament updates.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-lg border-0 bg-white/20 px-5 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white sm:min-w-[300px]"
                />
                <button className="rounded-lg bg-white px-6 py-3 font-semibold text-primary shadow-lg hover:bg-opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -left-6 -top-6 h-full w-full rounded-2xl border-2 border-white/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="CS2 Gaming Setup" 
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;