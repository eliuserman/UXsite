import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Building2, Sparkles } from "lucide-react";
import { projects } from "../../data/projects";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import newProjectImage from "@/assets/42c626e673f3c01200577fa14bd31c5dcfd49e82.png";

export function ContextPerformanceCost() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === "context-performance-cost");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const yOffset = -100;
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-gray-900 mb-4">Project not found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Building2 size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Company</div>
                <div className="text-gray-900">Bimmatch</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <Sparkles size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Role</div>
                <div className="text-gray-900">{project.role}</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6 font-[Actor]">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={newProjectImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Video */}
      {project.videoUrl && (
        <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title="Project video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* Project Content */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">Overview</h3>
              <p className="text-gray-600 leading-relaxed">{project.content.overview}</p>
            </div>
            <div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">Research</h3>
              <p className="text-gray-600 leading-relaxed">{project.content.research}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">Design</h3>
              <p className="text-gray-600 leading-relaxed">{project.content.design}</p>
            </div>
            <div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">Outcome</h3>
              <p className="text-gray-600 leading-relaxed">{project.content.outcome}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 font-[Actor]">
            Results & Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-2xl">
                    {index === 0 ? "📈" : index === 1 ? "⭐" : "✅"}
                  </span>
                </div>
                <p className="text-gray-900">{result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tags */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl text-gray-900 mb-4 font-[Actor]">Technologies & Methods</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl lg:text-4xl mb-4 font-[Actor]">Like what you see?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let's talk about your next project.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
            className="px-8 py-4 bg-transparent border border-white text-white rounded-xl hover:bg-white/10 transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
