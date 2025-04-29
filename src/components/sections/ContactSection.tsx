// src/components/sections/ContactSection.tsx

'use client';

import { useState } from 'react';
import { ThemeButton } from '~/components/buttons/ThemeButton';

// contact section component
export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // placeholder for form submission logic
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <p className="text-[var(--color-text)]">
          I'm currently open to new opportunities. Whether you have a question, a project idea, 
          or just want to say hello, feel free to reach out!
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">Contact Info</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-[var(--color-primary)] font-medium mb-1">Email</h4>
              <a 
                href="mailto:garrettfincke@gmail.com" 
                className="text-[var(--color-text)] hover:text-[var(--color-text-light)]"
              >
                garrettfincke@gmail.com
              </a>
            </div>
            
            <div>
              <h4 className="text-[var(--color-primary)] font-medium mb-1">Phone</h4>
              <a 
                href="tel:7247777186" 
                className="text-[var(--color-text)] hover:text-[var(--color-text-light)]"
              >
                724-777-7186
              </a>
            </div>
            
            <div>
              <h4 className="text-[var(--color-primary)] font-medium mb-1">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ggfincke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--color-text)] hover:text-[var(--color-text-light)]"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/garrett-fincke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--color-text)] hover:text-[var(--color-text-light)]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">Send a Message</h3>
          
          {submitSuccess ? (
            <div className="bg-[var(--color-primary)] bg-opacity-20 border border-[var(--color-primary)] rounded p-4">
              <p className="text-[var(--color-text-light)]">
                Thank you for your message! I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[var(--color-text)] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded px-4 py-2 text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[var(--color-text)] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded px-4 py-2 text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[var(--color-text)] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded px-4 py-2 text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              
              {submitError && (
                <div className="text-red-500">
                  {submitError}
                </div>
              )}
              
              <div>
                <ThemeButton
                  variant="primary"
                  className={`w-full ${isSubmitting ? 'opacity-70' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ThemeButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}