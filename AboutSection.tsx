import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, Cpu, Sparkles, Code } from 'lucide-react';

const timelineItems = [
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Passionate about artificial intelligence and building intelligent systems that solve real-world problems',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Cpu,
    title: 'Computer Science & AI',
    description: 'Studying Computer Science with specialization in Artificial Intelligence',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Code,
    title: 'Full-Stack Builder',
    description: 'Creating experiences through web development, robotics, and 3D design',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Sparkles,
    title: 'Human-Centered Tech',
    description: 'Focused on building technology that is intuitive, friendly, and meaningful',
    color: 'from-pink-500 to-cyan-500'
  }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
              style={{ fontWeight: 700 }}>
            About Me
          </h2>
          <p className="text-xl text-cyan-300/70">Building the future, one project at a time</p>
        </motion.div>

        {/* Floating intro card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 max-w-3xl mx-auto"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            
            {/* Card content */}
            <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                I'm <span className="text-cyan-400">Jananjaya Bandara</span>, a Computer Science student 
                from <span className="text-purple-400">Sri Lanka</span>, specializing in Artificial Intelligence. 
                I'm driven by curiosity and a passion for creating intelligent, human-friendly technology.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                From AI automation to robotics and immersive web experiences, I build projects that 
                combine <span className="text-cyan-400">innovation</span> with <span className="text-purple-400">purpose</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
              
              {/* Panel */}
              <div className="relative h-full bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:translate-y-[-4px]">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-3 text-cyan-300" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
