import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, ArrowUpRight, Award, Users, Briefcase, GraduationCap, Mail, Linkedin, Github, Twitter, Send, MapPin } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "../data/projects";
import { useRef, useState, useEffect } from "react";
import avatarImage from "@/assets/1b644bc2c92dd5ba6e42f009748cf3932bbb1018.png";
import bankingAppImage from "@/assets/7f87584dfef486bea3c284234f73498dd67c9819.png";
import amdocsAppImage from "@/assets/e83de090439b1fe19ad9a605c2c9b56d4e58c631.png";
import newProjectImage from "@/assets/42c626e673f3c01200577fa14bd31c5dcfd49e82.png";
import buildingBlocksImage from "@/assets/b216ba02fe20ef316352409d4bfc53b041db7e08.png";

function AnimatedCounter({ end, duration = 2, display }: { end: number; duration?: number; display?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  if (display) {
    return <div ref={ref}>{hasAnimated ? display : "0+"}</div>;
  }

  return <div ref={ref}>{count}+</div>;
}

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [emailCopied, setEmailCopied] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Parallax */}
      <section className="relative overflow-hidden min-h-[calc(100vh-5rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm"
              >
                <Sparkles size={16} />
                <span>UX Expert & Product Strategy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl tracking-tight text-gray-900 font-[Actor]"
              ><span className="italic">The Userman -</span> UX Expert and Product Strategist</motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 max-w-xl"
              >I'm Eli, a UX expert, product strategist, and a team leader, specializing in turning complex technical systems into clear, valuable solutions. Proven in 0 to 1 product success, discovery-driven design, and scaling adoption through close collaboration with customers, dev teams, and stakeholders.</motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  View My Work
                  <ArrowRight size={18} />
                </motion.a>

                <motion.button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-lg hover:border-gray-900 transition-colors"
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image with Parallax */}
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl w-3/4 mx-auto">
                <ImageWithFallback
                  src={avatarImage}
                  alt="UX Designer Portrait"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60"
              />
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-sm"
        />
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 10, label: "Years Experience" },
              { value: 30, label: "Happy Clients" },
              { value: 100, label: "Projects Completed" },
              { value: 1, label: "Users", display: "1M+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="text-3xl lg:text-4xl text-gray-900 mb-2 break-words">
                  <AnimatedCounter end={stat.value} display={stat.display} />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4 font-[Actor]">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A selection of recent work showcasing my approach to solving design challenges across different industries.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => {
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/project/${project.id}`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Image */}
                      <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow">
                          <img
                            src={
                              project.id === 'connecting-visual-text-data' ? bankingAppImage :
                              project.id === 'im-free-again' ? amdocsAppImage :
                              project.id === 'context-performance-cost' ? newProjectImage :
                              project.id === 'building-blocks' ? buildingBlocksImage :
                              project.thumbnail
                            }
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Floating decoration */}
                        <motion.div
                          animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 5, 0]
                          }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className={`absolute ${index % 2 === 0 ? '-right-4 -bottom-4' : '-left-4 -top-4'} w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl opacity-50 -z-10 blur-sm`}
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-6">
                        <div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm text-gray-600 mb-2"
                          >
                            {project.category.replace('Company: ', '').split(/[\-|]/)[0].trim()}
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="role-chip mb-3"
                          >
                            <Sparkles size={16} />
                            {project.role}
                          </motion.div>
                          <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-4xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors font-[Actor]"
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg"
                          >
                            {project.description}
                          </motion.p>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-wrap gap-2"
                        >
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ x: 5 }}
                          className="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors pt-4"
                        >
                          View Case Study
                          <ArrowUpRight
                            size={18}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 lg:p-16 text-white overflow-hidden"
          >
            {/* Animated background elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl mb-4 font-[Actor]">
                  Let's Work Together
                </h2>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                  Drop me a message and I'll get back to you with no time.
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Email */}
                <motion.div
                  onClick={() => {
                    // Fallback copy method without Clipboard API
                    const textarea = document.createElement('textarea');
                    textarea.value = 'eli.userman@gmail.com';
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                      document.execCommand('copy');
                      setEmailCopied(true);
                      setTimeout(() => setEmailCopied(false), 2000);
                    } catch (err) {
                      console.error('Copy failed');
                    }
                    document.body.removeChild(textarea);
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-blue-100 mb-1">Email</div>
                    <div className="text-white font-medium break-all">eli.userman@gmail.com</div>
                    <div className="text-xs text-blue-100 mt-2">
                      {emailCopied ? 'Copied to clipboard!' : 'Click to copy'}
                    </div>
                  </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/eliwasserman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors mx-auto">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-blue-100 mb-1">LinkedIn</div>
                    <div className="text-white font-medium">Connect with me</div>
                  </div>
                </motion.a>
              </div>

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-12 text-center"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <MapPin className="text-white" size={16} />
                  <span className="text-white font-medium">Sdei Hemed, Israel</span>
                </div>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-center"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white font-medium">Available for work</span>
                  <span className="text-blue-100">— I'm currently looking for my next challenge</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4 font-[Actor]">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A passionate designer focused on creating meaningful digital experiences
            </p>
          </motion.div>

          {/* Skills & Tools */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Design Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl text-gray-900 mb-6">Design Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { skill: "Product Discovery, Research, Workshops", level: 95 },
                  { skill: "User testing", level: 90 },
                  { skill: "Data-Driven Design", level: 92 },
                  { skill: "Complex Systems UX", level: 88 },
                  { skill: "Information Architecture", level: 90 },
                  { skill: "Design Systems", level: 87 },
                  { skill: "UI Design", level: 93 },
                  { skill: "Collaboration with Dev teams", level: 94 },
                  { skill: "Cross-functional Leadership", level: 89 },
                  { skill: "Stakeholder Management", level: 91 },
                  { skill: "Figma & Prototyping", level: 96 },
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-default flex items-center gap-3"
                  >
                    <div className="flex-shrink-0">
                      <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
                        {/* Background circle */}
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        {/* Animated progress circle */}
                        <motion.circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 100" }}
                          whileInView={{ strokeDasharray: `${item.level} 100` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                        {/* Gradient definition */}
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                        {/* Percentage text */}
                        <text
                          x="18"
                          y="18"
                          textAnchor="middle"
                          dy="0.3em"
                          className="text-[8px] fill-gray-700"
                          transform="rotate(90 18 18)"
                        >
                          {item.level}%
                        </text>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item.skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl text-gray-900 mb-6">Tools & Tech</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Figma",
                  "Sketch",
                  "Photoshop",
                  "After Effects",
                  "3D MAX",
                  "Axure",
                  "Miro",
                  "Claude",
                  "Antigravity",
                  "CSS",
                  "LLM",
                  "Graph RAG",
                  "BIM",
                ].map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-default flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4">My Design Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured yet flexible approach to solving design challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                description: "Understanding users, business goals, and market landscape through qualitative and quantitative methods.",
              },
              {
                step: "02",
                title: "Ideate",
                description: "Brainstorming solutions, sketching concepts, and exploring different approaches to the problem.",
              },
              {
                step: "03",
                title: "Design",
                description: "Creating wireframes, high-fidelity mockups, and interactive prototypes for testing.",
              },
              {
                step: "04",
                title: "Test & Iterate",
                description: "Validating designs with users, gathering feedback, and refining the solution.",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="text-4xl text-blue-600 mb-4">{phase.step}</div>
                <h3 className="text-xl text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}