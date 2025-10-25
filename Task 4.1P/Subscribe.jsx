import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // 1. Import emailjs

const Subscribe = () => {
  // 2. Create state for loading and error/success messages
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 3. Get your keys from the .env file
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // 4. Set loading state to true
    setIsError(false);
    setMessage('');

    // 5. This object must match the variables in your EmailJS template
    const templateParams = {
      user_email: email,
    };

    // 6. This is the function that sends the email
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        // Success
        console.log('SUCCESS!', response.status, response.text);
        setMessage(`Thank you for subscribing, ${email}!`);
        setIsError(false);
        setEmail('');
      })
      .catch((err) => {
        // Failure
        console.log('FAILED...', err);
        setMessage('Failed to subscribe. Please try again.');
        setIsError(true);
      })
      .finally(() => {
        // 7. Set loading back to false whether it succeeded or failed
        setIsLoading(false);
      });
  };

  return (
    <section className="bg-gray-100 p-6 my-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <label htmlFor="email" className="font-bold text-lg">
          SIGN UP FOR OUR DAILY INSIDER
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-lg w-full md:w-80"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gray-400 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-500 disabled:bg-gray-300"
          disabled={isLoading} // 8. Disable button when loading
        >
          {isLoading ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>

      {/* 9. Show a dynamic message based on success or error */}
      {message && (
        <p className={`text-center font-medium mt-4 ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </section>
  );
};

export default Subscribe;