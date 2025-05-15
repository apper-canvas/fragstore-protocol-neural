import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

const NotFound = () => {
  const navigate = useNavigate();
  const HomeIcon = getIcon('Home');
  const AlertTriangleIcon = getIcon('AlertTriangle');
  const ArrowLeftIcon = getIcon('ArrowLeft');
  
  // Auto-redirect after 10 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 10000);
    
    return () => clearTimeout(redirectTimer);
  }, [navigate]);
  
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg text-center"
      >
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
          <AlertTriangleIcon className="h-12 w-12" />
        </div>
        
        <h1 className="mb-4 text-5xl font-bold">404</h1>
        <h2 className="mb-6 text-2xl font-semibold">Page Not Found</h2>
        
        <p className="mb-8 text-surface-600 dark:text-surface-400">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable. You will be redirected to the home page in a few seconds.
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
          <Link 
            to="/"
            className="flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary-dark"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Go to Home
          </Link>
          
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center rounded-lg border border-surface-300 px-6 py-3 font-medium transition-all hover:bg-surface-100 dark:border-surface-700 dark:hover:bg-secondary"
          >
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
        
        <div className="mt-8">
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-200 dark:bg-surface-700">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 10, ease: "linear" }}
              className="h-full bg-primary"
            />
          </div>
          <p className="mt-2 text-sm text-surface-500">Redirecting to home page...</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;