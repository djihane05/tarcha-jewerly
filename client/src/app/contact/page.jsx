"use client";
import { useState } from "react";

export default function ContactPage() {
         const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {


const response = await fetch(`${apiUrl}/api/contact`, {
  method: "POST",
  body: JSON.stringify(formData),
  headers: { "Content-Type": "application/json" }
});


      const data = await response.json();
      if (data.success) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" }); // reset
      } else {
        setStatus("Erreur : " + data.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-white px-4 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Contactez-nous
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300 font-semibold"
          >
            Envoyer
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-center font-medium ${
              status.includes("succès") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
