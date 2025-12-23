import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

const AnimatedBackground = () => (
  <div className="animated-bg" aria-hidden="true" />
);

const FuukeiContent = () => (
  <motion.main
    className="glass-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Hey there!
    </motion.h1>

    <motion.div
      className="description"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.85 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <p>We are working on a new project with <strong>Fuukei</strong>.</p>
      <p>Stay tuned for updates!</p>
      
    </motion.div>
    <motion.h2 initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ 
          marginTop: '2.5rem', 
          marginBottom: '2rem', 
          color: '#2c3e50',
          fontSize: '1.5rem',
          letterSpacing: '1px',
          paddingBottom: '10px'
        }}>
      Seeing in Q2 2026!
    </motion.h2>
    <motion.button
      className="cta-button"
      onClick={() => window.open('https://github.com/Fuukei', '_blank')}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      Take a peek! ✨ <ArrowUpRight size={20} />
    </motion.button>
  </motion.main>
);

export default function App() {
  return (
    <div className="app-container">
      <AnimatedBackground />
      <FuukeiContent />
    </div>
  );
}