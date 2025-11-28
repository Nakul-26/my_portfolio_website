import React from 'react';
import { motion } from 'framer-motion';

// A softer, more dimensional transition
const smoothAnimations = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={smoothAnimations} // Use the new variants
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }} // Faster transition feels snappier
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
