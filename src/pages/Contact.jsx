import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_emailportfolio",
        "template_contactportfoli",
        form.current,
        "OhwDulhy6rfC6aJnO"
      )
      .then(() => alert("Message sent!"))
      .catch((err) => alert("Error: " + err.message));
  };

  return (
    <motion.div
      className="p-6 md:p-12 bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-screen text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        📬 Contact
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
          rows="5"
          required
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl w-full transition"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Contact;
