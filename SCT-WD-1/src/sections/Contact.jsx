import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    idea: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // replace with actual submission
    alert("Message sent!");
    setFormData({ name: "", email: "", service: "", idea: "" });
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-black text-white relative flex items-center px-6 md:px-20 py-20 overflow-hidden">

      {/* Particles */}
      <ParticlesBackground />

      {/* Left Astronaut */}
      <div className="hidden md:flex flex-1 justify-center items-center relative">
        <div className="relative">
          {/* Tilted glow behind image */}
          <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-gradient-to-tr from-[#00ffbc]/40 via-[#00bfff]/30 to-transparent blur-3xl animate-pulse rotate-12"></div>
          <img
            src="https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-freelancer-software-developer-programmer-coder-illustrator-png-image_13076689.png"
            alt="Astronaut"
            className="w-96 md:w-[28rem] lg:w-[32rem] object-contain animate-floating drop-shadow-[0_0_50px_rgba(0,255,200,0.35)]"
          />
        </div>
      </div>

      {/* Right Form */}
      <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-xl shadow-cyan-500/20">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-6 text-lg">
          Fill the form below and explain your idea. I’ll get back to you soon!
        </p>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-5 rounded-2xl bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-[#1cd8d2] transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-5 rounded-2xl bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-[#1cd8d2] transition"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="p-5 rounded-2xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#1cd8d2] transition"
            required
          >
            <option value="">Select Service</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="AI/ML">AI/ML</option>
          </select>
          <textarea
            name="idea"
            rows="6"
            placeholder="Explain your idea..."
            value={formData.idea}
            onChange={handleChange}
            className="p-5 rounded-2xl bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-[#1cd8d2] resize-none transition"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] text-black font-bold text-lg hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
