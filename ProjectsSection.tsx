import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Bot, Workflow, Globe, Box, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'JBee – Human Friendly Table Robot',
    description: 'An intelligent desktop companion robot built with ESP32-S3, featuring AI vision, voice interaction, and autonomous navigation. Designed to be helpful, friendly, and emotionally engaging.',
    tags: ['Robotics', 'ESP32-S3', 'AI Vision', 'Voice AI', 'IoT'],
    icon: Bot,
    color: 'from-cyan-500 to-blue-600',
    features: ['AI-powered vision system', 'Natural voice interaction', 'Autonomous movement', 'Emotion recognition']
  },
  {
    id: 2,
    title: 'AI Automation Systems',
    description: 'Intelligent workflow automation tools leveraging AI agents and LLMs to streamline repetitive tasks, data processing, and decision-making workflows.',
    tags: ['AI', 'Automation', 'Python', 'LLMs', 'APIs'],
    icon: Workflow,
    color: 'from-blue-500 to-purple-600',
    features: ['Smart task orchestration', 'AI-powered bots', 'Custom dashboards', 'API integrations']
  },
  {
    id: 3,
    title: 'Immersive Web Experiences',
    description: 'Cutting-edge web applications featuring 3D graphics, smooth animations, and interactive storytelling. Built with modern frameworks and WebGL.',
    tags: ['React', 'Three.js', 'WebGL', 'Motion', 'UI/UX'],
    icon: Globe,
    color: 'from-purple-500 to-pink-600',
    features: ['3D animations', 'Responsive design', 'Interactive elements', 'Smooth transitions']
  },
  {
    id: 4,
    title: '3D Design & Concepts',
    description: 'Experimental 3D designs and creative visualizations exploring the intersection of art, technology, and user experience.',
    tags: ['3D Design', 'Blender', 'Creative', 'Experimental'],
    icon: Box,
    color: 'from-pink-500 to-cyan-500',
    features: ['Abstract visuals', 'Product renders', 'Motion graphics', 'Concept exploration']
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
      
      {/* Animated circles in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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
            Featured Projects
          </h2>
          <p className="text-xl text-cyan-300/70">Innovations at the intersection of AI, robotics, and design</p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* 3D hover effect glow */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-xl transition-opacity duration-500`}
                animate={{
                  opacity: hoveredProject === project.id ? 0.6 : 0.2
                }}
              />
              
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                {/* Icon header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </button>
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <Github className="w-5 h-5 text-cyan-400" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl mb-4 text-cyan-300 group-hover:text-cyan-200 transition-colors" 
                    style={{ fontWeight: 600 }}>
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={hoveredProject === project.id ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-cyan-400/80 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 3D depth effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: hoveredProject === project.id 
                      ? '0 20px 60px rgba(6, 182, 212, 0.3)' 
                      : '0 0 0 rgba(6, 182, 212, 0)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
