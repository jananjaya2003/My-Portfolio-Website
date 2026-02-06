import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Brain, Cpu, Code, Palette, Database, Zap } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    name: 'Artificial Intelligence',
    icon: Brain,
    skills: ['Machine Learning', 'Computer Vision', 'NLP', 'LLMs'],
    color: 'from-cyan-500 to-blue-600',
    position: { x: 0, y: 0 }
  },
  {
    id: 2,
    name: 'Robotics & Embedded',
    icon: Cpu,
    skills: ['ESP32', 'Arduino', 'Sensors', 'Motor Control'],
    color: 'from-blue-500 to-purple-600',
    position: { x: 1, y: 0 }
  },
  {
    id: 3,
    name: 'Web Development',
    icon: Code,
    skills: ['React', 'TypeScript', 'Node.js', 'APIs'],
    color: 'from-purple-500 to-pink-600',
    position: { x: 0, y: 1 }
  },
  {
    id: 4,
    name: '3D Design & Animation',
    icon: Palette,
    skills: ['Three.js', 'Blender', 'WebGL', 'Motion'],
    color: 'from-pink-500 to-red-600',
    position: { x: 1, y: 1 }
  },
  {
    id: 5,
    name: 'Data & Backend',
    icon: Database,
    skills: ['Python', 'SQL', 'REST APIs', 'Cloud'],
    color: 'from-red-500 to-orange-600',
    position: { x: 0, y: 2 }
  },
  {
    id: 6,
    name: 'UI/UX Design',
    icon: Zap,
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    color: 'from-orange-500 to-cyan-600',
    position: { x: 1, y: 2 }
  }
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-cyan-300/70">A multidisciplinary approach to innovation</p>
        </motion.div>

        {/* Skills grid - 3D holographic orbs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setActiveSkill(category.id)}
              onHoverEnd={() => setActiveSkill(null)}
              className="group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing orb effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-2xl`}
                animate={{
                  opacity: activeSkill === category.id ? 0.5 : 0.2,
                  scale: activeSkill === category.id ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Card container */}
              <motion.div
                className="relative h-full bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                animate={{
                  y: activeSkill === category.id ? -8 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Pulsing icon orb */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${category.color} shadow-2xl`}
                    animate={{
                      scale: activeSkill === category.id ? 1.15 : 1,
                      rotateZ: activeSkill === category.id ? 360 : 0
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Inner glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20"
                      animate={{
                        scale: activeSkill === category.id ? [1, 1.3, 1] : 1,
                        opacity: activeSkill === category.id ? [0.5, 0, 0.5] : 0.5
                      }}
                      transition={{ duration: 1.5, repeat: activeSkill === category.id ? Infinity : 0 }}
                    />
                    <category.icon className="w-10 h-10 text-white relative z-10" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl mb-4 text-center text-cyan-300 group-hover:text-cyan-200 transition-colors"
                    style={{ fontWeight: 600 }}>
                  {category.name}
                </h3>

                {/* Skills list */}
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      {/* Animated dot */}
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        animate={{
                          scale: activeSkill === category.id ? [1, 1.5, 1] : 1,
                          opacity: activeSkill === category.id ? [1, 0.5, 1] : 1
                        }}
                        transition={{ duration: 1, delay: idx * 0.1, repeat: activeSkill === category.id ? Infinity : 0 }}
                      />
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-bl-full`} />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${category.color} opacity-20 rounded-tr-full`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill stats visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap gap-8 justify-center items-center p-8 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500" style={{ fontWeight: 700 }}>
                15+
              </div>
              <div className="text-sm text-gray-500 mt-1">Technologies</div>
            </div>
            <div className="w-px h-12 bg-cyan-500/30" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" style={{ fontWeight: 700 }}>
                20+
              </div>
              <div className="text-sm text-gray-500 mt-1">Projects Built</div>
            </div>
            <div className="w-px h-12 bg-purple-500/30" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500" style={{ fontWeight: 700 }}>
                ∞
              </div>
              <div className="text-sm text-gray-500 mt-1">Ideas & Curiosity</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
