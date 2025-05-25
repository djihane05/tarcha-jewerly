const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// POST /api/contact
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Vérifie que tous les champs sont remplis
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    // Création d’un transporteur avec ton compte Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // mis dans .env
        pass: process.env.EMAIL_PASS, // mis dans .env
      },
    });

    // Options de l’email
    const mailOptions = {
      from: email, // l’expéditeur est le mail de l’utilisateur
      to: process.env.EMAIL_RECEIVER, // ton email à toi
      subject: `Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    };

    // Envoie l’email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending message" });
  }
});

// Lancement du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
