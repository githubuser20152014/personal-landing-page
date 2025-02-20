import React, { useState } from 'react';
import { X } from 'lucide-react';

const EmailModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/mwpvyoal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 p-6 rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-200"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-2xl font-light mb-6 text-slate-50">Send me a message</h2>
        
        {status === 'success' && (
          <div className="text-green-400 mb-4">Message sent successfully!</div>
        )}
        
        {status === 'error' && (
          <div className="text-red-400 mb-4">Failed to send message. Please try again.</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-slate-300 mb-2">
              Your Name (optional)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-700 rounded px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-slate-300 mb-2">
              Your Email (optional)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-700 rounded px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm text-slate-300 mb-2">
              Subject (optional)
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-700 rounded px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm text-slate-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-slate-700 rounded px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded transition-colors ${
              status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailModal; 