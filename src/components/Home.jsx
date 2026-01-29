/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Chai from "../assets/Chai.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-700 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>

      {/* Ornate Border Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-transparent via-amber-700 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-transparent via-amber-700 to-transparent opacity-60"></div>
        <div className="absolute top-0 bottom-0 left-0 w-2 bg-linear-to-b from-transparent via-amber-700 to-transparent opacity-60"></div>
        <div className="absolute top-0 bottom-0 right-0 w-2 bg-linear-to-b from-transparent via-amber-700 to-transparent opacity-60"></div>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-amber-700 opacity-40"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-amber-700 opacity-40"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-amber-700 opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-amber-700 opacity-40"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="mb-8 animate-[fadeIn_1s_ease-out]">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-amber-600 to-orange-800 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-linear-to-br from-amber-700 via-orange-700 to-amber-900 text-cream-100 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl border-4 border-amber-300">
              <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-25 mr-2 mt-2" src={Chai} alt="" />
                <div
                  className="text-xs tracking-widest mt-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  CHAI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-[fadeIn_1.2s_ease-out]">
          {/* Tagline */}
          <h1
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-900 via-orange-800 to-amber-900 mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Brew the Royal Tradition
          </h1>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-px bg-linear-to-r from-transparent to-amber-700"></div>
            <div className="w-3 h-3 rotate-45 border-2 border-amber-700"></div>
            <div className="w-16 h-px bg-linear-to-l from-transparent to-amber-700"></div>
          </div>

          {/* Brand Description */}
          <p
            className="text-xl md:text-2xl text-amber-900 leading-relaxed max-w-2xl mx-auto opacity-90"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            Experience the opulence of premium instant chai, crafted with the
            finest spices and traditions passed down through generations of
            royal Indian households.
            <span className="block mt-4 text-lg italic text-amber-800">
              A symphony of cardamom, ginger, and Ceylon cinnamon awaits.
            </span>
          </p>

          {/* Launching Soon Badge */}
          <div className="inline-block animate-[fadeIn_1.5s_ease-out]">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-orange-700 rounded-full blur-md opacity-50 animate-pulse"></div>
              <div className="relative bg-linear-to-r from-amber-700 to-orange-800 text-cream-50 px-12 py-4 rounded-full shadow-xl border-2 border-amber-300">
                <p
                  className="text-2xl font-bold tracking-wider"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  LAUNCHING SOON
                </p>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="mt-12 animate-[fadeIn_1.8s_ease-out]">
            <p
              className="text-lg text-amber-900 mb-4 tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              Be the first to savor the royal experience
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your royal email"
                  required
                  className="flex-1 px-6 py-4 rounded-full border-2 border-amber-700 bg-cream-50 bg-opacity-80 backdrop-blur-sm text-amber-900 placeholder-amber-600 focus:outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-300 transition-all shadow-lg"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-linear-to-r from-amber-700 to-orange-800 text-cream-50 rounded-full font-semibold hover:from-amber-800 hover:to-orange-900 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-amber-300"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  Join the Court
                </button>
              </div>
              {submitted && (
                <p
                  className="mt-4 text-green-700 font-semibold animate-[fadeIn_0.5s_ease-out]"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  ✓ Welcome to the royal circle! You'll be notified upon launch.
                </p>
              )}
            </form>
          </div>

          {/* Social Icons */}
          <div className="mt-16 animate-[fadeIn_2s_ease-out]">
            <p
              className="text-sm text-amber-800 mb-4 tracking-widest uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Follow Our Journey
            </p>
            <div className="flex justify-center gap-6">
              {[
                { Icon: FaInstagram, href: "#", label: "Instagram" },
                { Icon: FaFacebook, href: "#", label: "Facebook" },
                { Icon: FaTwitter, href: "#", label: "Twitter" },
                { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-amber-600 to-orange-700 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-14 h-14 bg-linear-to-br from-amber-700 to-orange-800 rounded-full flex items-center justify-center text-cream-50 hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-2xl hover:scale-110 border-2 border-amber-300">
                    <Icon className="text-2xl" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Decoration */}
        <div
          className="mt-20 text-center text-amber-800 text-sm opacity-60 animate-[fadeIn_2.2s_ease-out]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <p>© 2026 Royal Chai. Crafted with tradition and excellence.</p>
        </div>
      </div>
    </div>
  );
}
