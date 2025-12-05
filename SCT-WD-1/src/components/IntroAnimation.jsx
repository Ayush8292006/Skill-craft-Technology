import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function IntroAnimation({ onFinish }) {
  const controls = useAnimation();
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    async function sequence() {
      // ------- MAIN INTRO ANIMATION -------
      await controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "circOut" },
      });

      await new Promise((r) => setTimeout(r, 600));

      await controls.start({
        scale: 0.98,
        transition: { duration: 0.25 },
      });

      await controls.start({
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut", delay: 0.1 },
      });

      // Show Greeting
      setShowGreeting(true);

      // Wait 1.5s, then finish
      setTimeout(() => {
        setShowGreeting(false);
        if (typeof onFinish === "function") onFinish();
      }, 1500);
    }

    controls.set({ opacity: 0, scale: 0.8 });
    sequence();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* FIRST INTRO OVERLAY */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={controls}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      >
        <div className="flex flex-col items-center gap-6">
          <motion.h1
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "circOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight select-none"
          >
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Hello I'm
            </span>{" "}
            <span className="text-white">Ayush Kumar</span>
          </motion.h1>

          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-sm sm:text-base text-gray-300/90"
          >
            Web & Software Developer
          </motion.p>

          <div className="relative w-48 sm:w-64 h-1 mt-4 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-white/6 rounded-full" />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "110%"] }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.6 }}
              className="absolute left-0 top-0 bottom-0 w-1/2 
              bg-gradient-to-r from-green-300 via-cyan-300 to-blue-400 
              opacity-90 blur-sm"
            />
          </div>
        </div>
      </motion.div>

      {/* ⭐ GREETING SCREEN ⭐ */}
      {showGreeting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center
          bg-black/90 backdrop-blur-sm"
        >
          <motion.h2
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="text-5xl sm:text-6xl font-bold 
            bg-gradient-to-r from-purple-400 to-blue-400
            bg-clip-text text-transparent select-none"
          >
            Welcome  👋
          </motion.h2>
        </motion.div>
      )}
    </>
  );
}
