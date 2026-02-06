import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you for your message! This is a demo portfolio.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
              style={{ fontWeight: 700 }}>
            Let's Connect
          </h2>
          <p className="text-xl text-cyan-300/70">Ready to build something intelligent and meaningful</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-6 text-cyan-300" style={{ fontWeight: 600 }}>
                Get in Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new projects, innovative ideas, or opportunities to collaborate. 
                Whether you're looking to build AI solutions, robotics projects, or immersive web experiences, 
                let's create something amazing together.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-cyan-300">contact@jananjaya.dev</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-purple-300">Sri Lanka</div>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, color: 'from-cyan-500 to-blue-600' },
                  { icon: Linkedin, color: 'from-blue-500 to-purple-600' },
                  { icon: Twitter, color: 'from-purple-500 to-pink-600' }
                ].map((social, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gradient-to-r ${social.color} rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form - floating card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            
            {/* Form container */}
            <div className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <motion.div
                    animate={{
                      borderColor: focused === 'name' ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.2)'
                    }}
                    className="relative border-2 rounded-lg overflow-hidden transition-colors"
                  >
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 bg-black/50 text-white outline-none"
                      placeholder="Jananjaya Bandara"
                      required
                    />
                    {focused === 'name' && (
                      <motion.div
                        layoutId="input-glow"
                        className="absolute inset-0 bg-cyan-500/10 pointer-events-none"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <motion.div
                    animate={{
                      borderColor: focused === 'email' ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.2)'
                    }}
                    className="relative border-2 rounded-lg overflow-hidden transition-colors"
                  >
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 bg-black/50 text-white outline-none"
                      placeholder="your@email.com"
                      required
                    />
                    {focused === 'email' && (
                      <motion.div
                        layoutId="input-glow"
                        className="absolute inset-0 bg-cyan-500/10 pointer-events-none"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <motion.div
                    animate={{
                      borderColor: focused === 'message' ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.2)'
                    }}
                    className="relative border-2 rounded-lg overflow-hidden transition-colors"
                  >
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 bg-black/50 text-white outline-none resize-none"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      required
                    />
                    {focused === 'message' && (
                      <motion.div
                        layoutId="input-glow"
                        className="absolute inset-0 bg-cyan-500/10 pointer-events-none"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-shadow"
                  style={{ fontWeight: 600 }}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-cyan-300/70 italic">
            "Let's build something intelligent and meaningful."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
