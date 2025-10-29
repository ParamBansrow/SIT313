import React, { useState } from 'react';

const Newletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Subscribing...');
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Subscription successful! Check your email.');
        setEmail('');
      } else {
        setMessage(`Error: ${data.error || 'Failed to subscribe.'}`);
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="bg-gray-200 p-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <label
          htmlFor="email-input"
          className="font-bold text-lg tracking-wide text-black"
        >
          SIGN UP FOR OUR DAILY INSIDER
        </label>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2.5 border border-gray-400 text-base text-black"
            required
          />
          <button
            type="submit"
            className="py-2.5 px-4 bg-gray-400 border border-gray-400 cursor-pointer text-base font-bold text-black hover:bg-gray-500"
          >
            Subscribe
          </button>
        </form>
      </div>
      
      {/* Message display for success/error */}
      {message && <p className="text-center mt-3 text-black">{message}</p>}
    </div>
  );
};

export default Newletter;