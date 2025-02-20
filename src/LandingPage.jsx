import React, { useState } from 'react';
import { Code, BookOpen, Coffee, Twitter, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailModal from './components/EmailModal';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  // Update the email link in the navigation
  const emailButton = (
    <a 
      onClick={(e) => {
        e.preventDefault();
        setIsEmailModalOpen(true);
      }}
      href="#"
      className="hover:text-cyan-300 transition-colors cursor-pointer"
    >
      <Mail size={20} />
    </a>
  );

  // Update the email link in the thoughts section
  const emailLink = (
    <a 
      onClick={(e) => {
        e.preventDefault();
        setIsEmailModalOpen(true);
      }}
      href="#"
      className="hover:text-amber-300 cursor-pointer"
    >
      Email
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-800 text-slate-100 flex flex-col">
      <nav className="p-4 flex justify-between items-center">
        <button 
          onClick={() => setActiveSection('welcome')}
          className="text-xl font-light hover:text-cyan-300 transition-colors"
        >
          home
        </button>
        <div className="flex gap-6">
          <a 
            href="https://twitter.com/_life_examined_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-300 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://github.com/githubuser20152014" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-300 transition-colors"
          >
            <Github size={20} />
          </a>
          {emailButton}
        </div>
      </nav>

      <header className="text-center py-8">
        <button
          onClick={() => setActiveSection('welcome')}
          className="text-4xl font-light text-slate-50 hover:text-cyan-300 transition-colors"
        >
          akhil kumar
        </button>
      </header>

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
                <h1 className="text-5xl font-light mb-4 text-slate-50">
                  hello wanderer...
                </h1>
                <p className="text-xl text-slate-300">
                  Here I build digital experiences & share insights
                </p>
                
                <div className="flex justify-center gap-8 mt-12">
                  <button
                    onClick={() => setActiveSection('code')}
                    className="group flex flex-col items-center gap-2 transition-all hover:text-cyan-300"
                  >
                    <Code size={32} className="group-hover:scale-110 transition-transform" />
                    <span>Things I've Built</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveSection('writing')}
                    className="group flex flex-col items-center gap-2 transition-all hover:text-teal-300"
                  >
                    <BookOpen size={32} className="group-hover:scale-110 transition-transform" />
                    <span>Things I've Written</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveSection('thoughts')}
                    className="group flex flex-col items-center gap-2 transition-all hover:text-amber-300"
                  >
                    <Coffee size={32} className="group-hover:scale-110 transition-transform" />
                    <span>Random Thoughts</span>
                  </button>
                </div>
              </motion.div>
            )}

            {activeSection === 'code' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <button
                  onClick={() => setActiveSection('welcome')}
                  className="text-slate-400 hover:text-slate-200 mb-8"
                >
                  ← Back
                </button>
                
                <div className="grid gap-6">
                  <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
                    <h3 className="text-2xl font-light mb-4 text-slate-50">Personal Portfolio</h3>
                    <p className="text-slate-300 mb-4">
                      A minimalist portfolio built with React and Tailwind CSS. Features smooth animations
                      and a clean, modern design.
                    </p>
                    <div className="flex gap-3 mb-4">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">React</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Tailwind</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Framer Motion</span>
                    </div>
                    <a 
                      href="https://github.com/yourusername/portfolio" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-200"
                    >
                      View source →
                    </a>
                  </div>

                  <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
                    <h3 className="text-2xl font-light mb-4 text-slate-50">Task Management App</h3>
                    <p className="text-slate-300 mb-4">
                      A productivity tool for managing daily tasks and projects. Includes drag-and-drop
                      functionality and local storage persistence.
                    </p>
                    <div className="flex gap-3 mb-4">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">TypeScript</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">React</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Redux</span>
                    </div>
                    <a 
                      href="https://your-task-app.netlify.app" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-200"
                    >
                      Visit site →
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'writing' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <button
                  onClick={() => setActiveSection('welcome')}
                  className="text-slate-400 hover:text-slate-200 mb-8"
                >
                  ← Back
                </button>
                
                <div className="space-y-12">
                  <article className="group">
                    <div className="text-sm text-slate-400 mb-2">January 15, 2024</div>
                    <h3 className="text-2xl font-light mb-2 group-hover:text-teal-300 transition-colors">
                      <a 
                        href="https://your-blog.com/post-1" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Getting Started with React and Tailwind CSS
                      </a>
                    </h3>
                    <p className="text-slate-300">
                      A comprehensive guide to setting up a modern web development environment
                      using React and Tailwind CSS. Learn best practices and common pitfalls.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">React</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Tailwind</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Tutorial</span>
                    </div>
                  </article>

                  <article className="group">
                    <div className="text-sm text-slate-400 mb-2">December 28, 2023</div>
                    <h3 className="text-2xl font-light mb-2 group-hover:text-teal-300 transition-colors">
                      <a 
                        href="https://your-blog.com/post-2" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        The Power of Static Site Generation
                      </a>
                    </h3>
                    <p className="text-slate-300">
                      Exploring the benefits of static site generation and how it can improve
                      your website's performance and SEO.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">NextJS</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Performance</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">SEO</span>
                    </div>
                  </article>
                </div>
              </motion.div>
            )}

            {activeSection === 'thoughts' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <button
                  onClick={() => setActiveSection('welcome')}
                  className="text-slate-400 hover:text-slate-200 mb-8"
                >
                  ← Back
                </button>
                
                <div className="space-y-6 text-lg text-slate-300">
                  <p>
                    Currently exploring the world of generative art and creative coding.
                    Fascinated by how code can create beauty.
                  </p>
                  <p>
                    Building tools that help people learn and create in public.
                    The internet should be a garden, not a feed.
                  </p>
                  <p>
                    Always happy to chat about creative coding, digital gardens,
                    or your latest project. Find me on:
                  </p>
                  <div className="flex gap-4 text-slate-400">
                    <a 
                      href="https://twitter.com/_life_examined_" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-amber-300"
                    >
                      Twitter
                    </a>
                    <span>•</span>
                    <a 
                      href="https://github.com/githubuser20152014" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-amber-300"
                    >
                      GitHub
                    </a>
                    <span>•</span>
                    {emailLink}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-slate-400">
        <p>Built with ❤️ using React & Tailwind</p>
      </footer>

      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </div>
  );
};

export default LandingPage; 