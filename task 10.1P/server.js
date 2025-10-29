// Import required packages
require('dotenv').config(); // Loads .env variables
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// --- Middleware ---
// Enable CORS for all requests (to allow React app to communicate)
app.use(cors());
// Parse incoming JSON request bodies
app.use(express.json());

// --- API Endpoint ---
// This is the endpoint React will call
app.post('/api/subscribe', async (req, res) => {
  // Get email from the request body
  const { email } = req.body;

  // Simple validation
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  // Create the welcome email message [cite: 16]
  const msg = {
    to: email, // The new subscriber's email
    from: process.env.VERIFIED_SENDER_EMAIL, // Your verified sender email
    subject: 'Welcome to the DEV@Deakin Newsletter!',
    html: `
      <h1>Welcome!</h1>
      <p>Thank you for subscribing to our daily insider.</p>
    `,
  };

  try {
    // Try to send the email
    await sgMail.send(msg);
    console.log(`Welcome email sent to ${email}`);
    res.status(200).json({ message: 'Subscription successful! Welcome email sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send welcome email.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});