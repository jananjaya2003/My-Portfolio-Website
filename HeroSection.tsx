import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Hero3DBackground } from './Hero3DBackground';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <Hero3DBackground />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl"
        >
          {/* Name with glow effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            style={{
              textShadow: '0 0 40px rgba(6, 182, 212, 0.5), 0 0 80px rgba(139, 92, 246, 0.3)',
              fontWeight: 700,
            }}
          >
            Jananjaya Bandara
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-cyan-300/90 mb-2">
              AI Developer • Creative Technologist
            </p>
            <p className="text-lg md:text-xl text-purple-300/80">
              3D & Web Innovator
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              <span className="relative z-10 text-white">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-cyan-400/50 rounded-lg backdrop-blur-sm bg-black/30 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <span className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                Contact Me
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400/60" />
        </motion.div>
      </div>
    </section>
  );
}
