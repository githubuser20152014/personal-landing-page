import React, { useState } from 'react';
import { Code, BookOpen, Coffee, Twitter, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  return (
    <div className="min-h-screen bg-slate-800 text-slate-100 flex flex-col">
      {/* Add navigation */}
      <nav className="p-4 flex justify-between items-center">
        <button 
          onClick={() => setActiveSection('welcome')}
          className="text-xl font-light hover:text-cyan-300 transition-colors"
        >
          home
        </button>
        <div className="flex gap-6">
          <a href="https://twitter.com/yourusername" className="hover:text-cyan-300 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://github.com/yourusername" className="hover:text-cyan-300 transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-cyan-300 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            {activeSection === 'welcome' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6 text-center"
              >
                // ... existing welcome section code ...
              </motion.div>
            )}

            {activeSection === 'code' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                // ... existing code section code ...
              </motion.div>
            )}

            {/* Similar motion.div wrappers for 'writing' and 'thoughts' sections */}
            // ... existing sections code ...
          </AnimatePresence>
        </div>
      </main>

      {/* Add footer */}
      <footer className="p-4 text-center text-sm text-slate-400">
        <p>Built with ❤️ using React & Tailwind</p>
      </footer>
    </div>
  );
};

export default LandingPage; 