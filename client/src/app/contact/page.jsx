"use client";

import React, { useState } from "react";
import { Instagram } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://tacha-backend-1.onrender.com/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      const data = await response.json();
      console.log("Réponse du serveur :", data);

      setStatus("Message envoyé avec succès !");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Une erreur est survenue.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h1 className="text-3xl font-semibold text-center text-[#5e3c2f] mb-6">
        Contactez-nous
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#5e3c2f]"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#5e3c2f]"
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#5e3c2f]"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#5e3c2f] text-white py-2 rounded hover:bg-[#3d251f] transition"
        >
          Envoyer
        </button>
      </form>

      {status && <p className="mt-4 text-green-600 text-center">{status}</p>}

      {/* Réseaux sociaux */}
      <div className="flex justify-center mt-6 space-x-6">
        <a
          href="https://www.instagram.com/ton_compte_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e1306c] hover:scale-110 transition transform"
        >
          <Instagram size={32} />
        </a>
      </div>
    </div>
  );
}
