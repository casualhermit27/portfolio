import { useState } from 'react';

export const ContactForm = () => {
  return (
    <form className="space-y-6">
      {/* Name Input */}
      <div>
        <label 
          htmlFor="name" 
          className="block text-sm font-medium text-neutral-600 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 
                   focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                   transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Email Input */}
      <div>
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-neutral-600 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 
                   focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                   transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {/* Message Input */}
      <div>
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-neutral-600 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 
                   focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500
                   transition-colors resize-none"
          placeholder="What would you like to say?"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 
                 text-white font-medium hover:from-violet-600 hover:to-blue-600 
                 transform transition-all duration-200 hover:-translate-y-0.5 cursor-hover-target"
      >
        Send Message
      </button>
    </form>
  );
}; 