import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

const MainFeature = () => {
  // Icon definitions
  const MonitorIcon = getIcon('Monitor');
  const KeyboardIcon = getIcon('Keyboard');
  const MouseIcon = getIcon('Mouse');
  const HeadphonesIcon = getIcon('Headphones');
  const CheckIcon = getIcon('Check');
  const ShoppingCartIcon = getIcon('ShoppingCart');
  const InfoIcon = getIcon('Info');
  const StarIcon = getIcon('Star');
  const ShieldIcon = getIcon('Shield');
  const ChevronRightIcon = getIcon('ChevronRight');
  const ChevronLeftIcon = getIcon('ChevronLeft');
  const PlusIcon = getIcon('Plus');
  const MinusIcon = getIcon('Minus');
  
  // Available products by category
  const products = {
    monitor: [
      { id: 'm1', name: 'CS2 Pro 240Hz Gaming Monitor', price: 329.99, image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.8 },
      { id: 'm2', name: 'Ultra Wide HDR Display', price: 449.99, image: 'https://images.unsplash.com/photo-1616763355603-12ec1f78c6d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.6 },
      { id: 'm3', name: 'Tournament Ready 360Hz Monitor', price: 599.99, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.9 }
    ],
    keyboard: [
      { id: 'k1', name: 'CS2 Mechanical Gaming Keyboard', price: 89.99, image: 'https://images.unsplash.com/photo-1631123327880-c83577980a5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.7 },
      { id: 'k2', name: 'Pro Tactile RGB Keyboard', price: 129.99, image: 'https://images.unsplash.com/photo-1610935591959-f785a6c63479?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.5 },
      { id: 'k3', name: 'Weapon Skin Themed Custom Keycaps', price: 49.99, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.3 }
    ],
    mouse: [
      { id: 'ms1', name: 'CS2 Pro Gaming Mouse', price: 59.99, image: 'https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.8 },
      { id: 'ms2', name: 'Dragon Lore Limited Edition Mouse', price: 89.99, image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.9 },
      { id: 'ms3', name: 'Ultralight Competitive Mouse', price: 69.99, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.6 }
    ],
    headphones: [
      { id: 'h1', name: 'CS2 Pro Gaming Headset', price: 99.99, image: 'https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.7 },
      { id: 'h2', name: 'Tournament Grade Noise Cancelling Headset', price: 149.99, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.8 },
      { id: 'h3', name: 'Tactical Sound Advantage Headphones', price: 129.99, image: 'https://images.unsplash.com/photo-1590658602586-e9d4351bb7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', rating: 4.6 }
    ]
  };
  
  // State setup
  const [activeCategory, setActiveCategory] = useState('monitor');
  const [selectedProducts, setSelectedProducts] = useState({});
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Calculate total price whenever selected products or quantity changes
  useEffect(() => {
    let price = 0;
    Object.values(selectedProducts).forEach(product => {
      price += product.price;
    });
    setTotalPrice(price * quantity);
  }, [selectedProducts, quantity]);
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentProductIndex(0);
  };
  
  // Select a product
  const selectProduct = (product) => {
    setSelectedProducts(prev => ({
      ...prev,
      [activeCategory]: product
    }));
    
    toast.success(`Added ${product.name} to your setup!`, {
      position: "bottom-right",
      autoClose: 2000
    });
  };
  
  // Handle navigation within a category
  const handleNavigation = (direction) => {
    const productsInCategory = products[activeCategory];
    if (direction === 'next') {
      setCurrentProductIndex(prev => 
        prev === productsInCategory.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentProductIndex(prev => 
        prev === 0 ? productsInCategory.length - 1 : prev - 1
      );
    }
  };
  
  // Add the current bundle to cart
  const addBundleToCart = () => {
    // Check if at least one product is selected
    if (Object.keys(selectedProducts).length === 0) {
      toast.error("Please select at least one item for your setup.", {
        position: "bottom-right"
      });
      return;
    }
    
    toast.success(`Bundle added to cart! (${quantity} × $${totalPrice.toFixed(2)})`, {
      position: "bottom-right",
      icon: <ShoppingCartIcon />
    });
  };
  
  // Increase/decrease quantity
  const updateQuantity = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  // Category buttons
  const categories = [
    { id: 'monitor', label: 'Monitors', icon: MonitorIcon },
    { id: 'keyboard', label: 'Keyboards', icon: KeyboardIcon },
    { id: 'mouse', label: 'Mice', icon: MouseIcon },
    { id: 'headphones', label: 'Headsets', icon: HeadphonesIcon },
  ];
  
  // Current product being viewed
  const currentProduct = products[activeCategory][currentProductIndex];
  
  return (
    <div className="rounded-2xl bg-surface-50 p-4 shadow-lg dark:bg-secondary lg:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Categories and Product Selection */}
        <div className="lg:col-span-2">
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-all sm:text-base ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-surface-700 hover:bg-surface-100 dark:bg-secondary-light dark:text-surface-300 dark:hover:bg-surface-800'
                }`}
              >
                <category.icon className="mr-2 h-5 w-5" />
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Product Viewer */}
          <div className="relative mb-6 overflow-hidden rounded-xl bg-white p-6 shadow-md dark:bg-secondary-light">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                Select Your {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
              </h3>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleNavigation('prev')}
                  className="rounded-full p-1 hover:bg-surface-100 dark:hover:bg-surface-800"
                  aria-label="Previous product"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleNavigation('next')}
                  className="rounded-full p-1 hover:bg-surface-100 dark:hover:bg-surface-800"
                  aria-label="Next product"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                <div className="relative overflow-hidden rounded-lg bg-surface-100 dark:bg-secondary">
                  <img 
                    src={currentProduct.image} 
                    alt={currentProduct.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 flex items-center rounded-full bg-white px-2 py-1 text-sm font-semibold shadow-md dark:bg-secondary-light">
                    <StarIcon className="mr-1 h-4 w-4 text-yellow-400" />
                    {currentProduct.rating}
                  </div>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">{currentProduct.name}</h4>
                    <p className="mb-4 text-surface-600 dark:text-surface-400">
                      Professional-grade gaming {activeCategory} designed specifically for CS2 players.
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        CS2 Optimized
                      </span>
                      <span className="rounded-full bg-surface-100 px-3 py-1 text-sm font-medium text-surface-700 dark:bg-surface-800 dark:text-surface-300">
                        Pro-Grade
                      </span>
                      <span className="rounded-full bg-surface-100 px-3 py-1 text-sm font-medium text-surface-700 dark:bg-surface-800 dark:text-surface-300">
                        Limited Edition
                      </span>
                    </div>
                    <div className="mb-4 flex items-baseline">
                      <span className="text-2xl font-bold text-primary">${currentProduct.price.toFixed(2)}</span>
                      {activeCategory === 'monitor' && (
                        <span className="ml-2 text-sm text-surface-500 line-through">
                          ${(currentProduct.price * 1.2).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-surface-600 dark:text-surface-400">
                      <ShieldIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>2-year warranty included</span>
                    </div>
                    <button
                      onClick={() => selectProduct(currentProduct)}
                      className={`w-full rounded-lg py-3 font-medium text-white transition-all ${
                        selectedProducts[activeCategory]?.id === currentProduct.id
                          ? 'bg-green-600'
                          : 'bg-primary hover:bg-primary-dark'
                      }`}
                    >
                      {selectedProducts[activeCategory]?.id === currentProduct.id ? (
                        <span className="flex items-center justify-center">
                          <CheckIcon className="mr-2 h-5 w-5" />
                          Selected
                        </span>
                      ) : (
                        'Add to Setup'
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Selected Products */}
          <div className="overflow-hidden rounded-xl bg-white p-6 shadow-md dark:bg-secondary-light">
            <h3 className="mb-4 text-xl font-semibold">Your Custom Setup</h3>
            
            {Object.keys(selectedProducts).length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg bg-surface-50 p-8 text-center dark:bg-secondary">
                <div className="mb-4 rounded-full bg-surface-100 p-4 dark:bg-surface-800">
                  <InfoIcon className="h-8 w-8 text-surface-500" />
                </div>
                <h4 className="mb-2 text-lg font-medium">Start Building Your Setup</h4>
                <p className="mb-4 text-surface-600 dark:text-surface-400">
                  Select products from each category to build your perfect CS2 gaming setup
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.entries(selectedProducts).map(([category, product]) => (
                  <div 
                    key={product.id} 
                    className="flex items-center justify-between rounded-lg bg-surface-50 p-3 dark:bg-secondary"
                  >
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          {category === 'monitor' && <MonitorIcon className="mr-2 h-4 w-4 text-primary" />}
                          {category === 'keyboard' && <KeyboardIcon className="mr-2 h-4 w-4 text-primary" />}
                          {category === 'mouse' && <MouseIcon className="mr-2 h-4 w-4 text-primary" />}
                          {category === 'headphones' && <HeadphonesIcon className="mr-2 h-4 w-4 text-primary" />}
                          <h4 className="font-medium">{product.name}</h4>
                        </div>
                        <p className="text-sm text-surface-600 dark:text-surface-400">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button 
                      className="text-surface-500 hover:text-primary dark:text-surface-400"
                      onClick={() => {
                        const newSelected = {...selectedProducts};
                        delete newSelected[category];
                        setSelectedProducts(newSelected);
                        toast.info(`Removed ${product.name} from your setup`);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Right Column - Order Summary */}
        <div>
          <div className="sticky top-24 rounded-xl bg-white p-6 shadow-lg dark:bg-secondary-light">
            <h3 className="mb-6 text-xl font-semibold">Bundle Summary</h3>
            
            <div className="space-y-4">
              <div className="rounded-lg bg-surface-50 p-4 dark:bg-secondary">
                <div className="mb-4 flex justify-between">
                  <span className="font-medium">Selected Items</span>
                  <span>{Object.keys(selectedProducts).length}</span>
                </div>
                
                <div className="mb-4 space-y-2">
                  {Object.entries(selectedProducts).map(([category, product]) => (
                    <div key={product.id} className="flex justify-between text-sm">
                      <span className="text-surface-600 dark:text-surface-400">{product.name}</span>
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                  ))}
                  
                  {Object.keys(selectedProducts).length === 0 && (
                    <div className="text-sm text-surface-500 dark:text-surface-400 italic">
                      No items selected yet
                    </div>
                  )}
                </div>
                
                <div className="mb-4 border-t border-surface-200 pt-2 dark:border-surface-700">
                  <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>${(totalPrice / quantity).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium">Quantity</label>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity('decrease')}
                      disabled={quantity <= 1}
                      className={`rounded-l-lg border border-surface-300 bg-surface-100 px-3 py-2 dark:border-surface-700 dark:bg-secondary-light ${
                        quantity <= 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-surface-200 dark:hover:bg-surface-800'
                      }`}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <div className="border-t border-b border-surface-300 bg-white px-4 py-2 text-center dark:border-surface-700 dark:bg-secondary-light">
                      {quantity}
                    </div>
                    <button
                      onClick={() => updateQuantity('increase')}
                      className="rounded-r-lg border border-surface-300 bg-surface-100 px-3 py-2 hover:bg-surface-200 dark:border-surface-700 dark:bg-secondary-light dark:hover:bg-surface-800"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Bundle Discount */}
                {Object.keys(selectedProducts).length >= 3 && (
                  <div className="mb-4 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <CheckIcon className="mr-2 h-5 w-5" />
                      <span className="text-sm font-medium">Bundle discount applied (10%)</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="rounded-lg bg-primary p-4 text-white">
                <div className="mb-2 flex justify-between text-lg font-bold">
                  <span>Total Price</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                {Object.keys(selectedProducts).length >= 3 && (
                  <div className="mb-2 flex justify-between text-sm text-white/80">
                    <span>Original Price</span>
                    <span className="line-through">${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                )}
                <p className="mb-4 text-xs text-white/80">
                  Taxes calculated at checkout. Free shipping on orders over $150.
                </p>
              </div>
              
              <button
                onClick={addBundleToCart}
                className="w-full rounded-lg bg-primary py-3 font-medium text-white shadow-lg transition-all hover:bg-primary-dark"
              >
                <div className="flex items-center justify-center">
                  <ShoppingCartIcon className="mr-2 h-5 w-5" />
                  Add Bundle to Cart
                </div>
              </button>
              
              <div className="mt-4 space-y-3 rounded-lg bg-surface-50 p-4 text-sm dark:bg-secondary">
                <div className="flex items-start">
                  <ShieldIcon className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-surface-700 dark:text-surface-300">
                    <span className="font-medium">Warranty Protection</span>: All products come with a 2-year manufacturer warranty
                  </span>
                </div>
                <div className="flex items-start">
                  <TruckIcon className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-surface-700 dark:text-surface-300">
                    <span className="font-medium">Fast Shipping</span>: Free 2-3 day shipping on all orders
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeature;