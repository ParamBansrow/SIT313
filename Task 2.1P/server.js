require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).send("Invalid email address.");
  }

  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: "Welcome to DEV@Deakin",
    text: "Thank you for subscribing to DEV@Deakin!",
    html: "<h1>Welcome to DEV@Deakin!</h1><p>We are glad to have you on board.</p>",
  };

  try {
     await sgMail.send(msg);
    res.send("Welcome email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
