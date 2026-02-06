import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-cyan-950/10 to-transparent py-12 px-4 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2026 <span className="text-cyan-400">Jananjaya Bandara</span>. Built with{' '}
              <Heart className="inline w-4 h-4 text-pink-500 fill-pink-500" /> and AI
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Designed & Developed in Sri Lanka
            </p>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Decorative line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Powered by Three.js, React, and Motion</p>
        </div>
      </div>
    </footer>
  );
}
