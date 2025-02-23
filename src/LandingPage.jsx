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
                    <h3 className="text-2xl font-light mb-4 text-slate-50">Mind Flow</h3>
                    <p className="text-slate-300 mb-4">
                      A smart task organization system that transforms chaotic thoughts into structured action. 
                      Features brain dump for quick capture, intelligent project tagging, a focused "Now" list, 
                      and drag-and-drop organization. Built for those who think faster than they can organize.
                    </p>
                    <div className="flex gap-3 mb-4">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">React</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Drag & Drop</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Local Storage</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Task Management</span>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="https://github.com/githubuser20152014/task-organizer" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        View source →
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
                    <h3 className="text-2xl font-light mb-4 text-slate-50">Brain Dump AI</h3>
                    <p className="text-slate-300 mb-4">
                      An AI-powered thought organizer that transforms stream-of-consciousness notes into 
                      structured action items. Features Claude AI integration for generating concise summaries, 
                      actionable tasks, and motivational insights from your thoughts.
                    </p>
                    <div className="flex gap-3 mb-4">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">React</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Express.js</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Claude AI</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Local Storage</span>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="https://braindumpai.netlify.app" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        Visit site →
                      </a>
                      <a 
                        href="https://github.com/githubuser20152014/brain-dump" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        View source →
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
                    <h3 className="text-2xl font-light mb-4 text-slate-50">Personal Landing Page</h3>
                    <p className="text-slate-300 mb-4">
                      A dynamic landing page featuring a contact form, project showcase, and blog sections. 
                      Built with modern web technologies for smooth transitions and responsive design.
                    </p>
                    <div className="flex gap-3 mb-4">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">React</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Tailwind</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Framer Motion</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Formspree</span>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="https://my-personal-landing-page.netlify.app" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        Visit site →
                      </a>
                      <a 
                        href="https://github.com/githubuser20152014/personal-landing-page" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        View source →
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
                    <h3 className="text-2xl font-light mb-4 text-slate-50">Just Start</h3>
                    <p className="text-slate-300 mb-4">
                      A minimalist task manager that works like your brain. Features instant task sorting 
                      (Today/Tomorrow/Later), smart project tagging with #hashtags, and time-stamped notes. 
                      No fuss, no frills - just start getting things done.
                    </p>
                    <div className="flex gap-3 mb-4">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">HTML5</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">CSS3</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">JavaScript</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Local Storage</span>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="https://juststartnow.netlify.app" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        Visit site →
                      </a>
                      <a 
                        href="https://github.com/githubuser20152014/just-start" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        View source →
                      </a>
                    </div>
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
                    <div className="text-sm text-slate-400 mb-2">February 20, 2024</div>
                    <h3 className="text-2xl font-light mb-2 group-hover:text-teal-300 transition-colors">
                      <a 
                        href="https://todayilearnedthis.substack.com/p/the-art-and-science-of-machine-learning?r=lvsyk" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        The Art & Science of Machine Learning: A Deep Dive into Model Development
                      </a>
                    </h3>
                    <p className="text-slate-300">
                      A practical exploration of ML model development, examining the CRISP-DM framework 
                      and the delicate balance between technical excellence and business constraints. 
                      Discusses the complexity trilogy of feature selection, algorithm choice, and 
                      hyperparameter tuning, while emphasizing the importance of proper validation methodology.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Machine Learning</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Model Development</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Data Science</span>
                    </div>
                  </article>

                  <article className="group">
                    <div className="text-sm text-slate-400 mb-2">February 18, 2024</div>
                    <h3 className="text-2xl font-light mb-2 group-hover:text-teal-300 transition-colors">
                      <a 
                        href="https://todayilearnedthis.substack.com/p/the-evolution-of-machine-learning?r=lvsyk" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        The Evolution of Machine Learning: From Statistical Principles to Modern AI
                      </a>
                    </h3>
                    <p className="text-slate-300">
                      An exploration of machine learning's journey from its 18th-century mathematical foundations 
                      to today's AI revolution. Discusses how fundamental principles like Bayes' theorem still 
                      underpin modern AI systems, while examining the convergence of data, computing power, 
                      and algorithmic breakthroughs that enabled today's ML explosion.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Machine Learning</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">AI</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200">Data Science</span>
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