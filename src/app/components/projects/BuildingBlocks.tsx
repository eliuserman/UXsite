import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Users, Building2, Sparkles, Target, UserCheck, ChevronDown, ChevronUp, Rocket, ThumbsUp } from "lucide-react";
import { projects } from "../../data/projects";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from "@/assets/a1.png";
import a2 from "@/assets/a2.png";
import a3 from "@/assets/a3.png";
import a4 from "@/assets/a4.png";
import a5 from "@/assets/a5.png";

const sliderImages = [a1, a2, a3, a4, a5];

export function BuildingBlocks() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === "building-blocks");
  const [isValidationExpanded, setIsValidationExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleToggle = () => {
    if (isValidationExpanded && sectionRef.current) {
      const yOffset = -100;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsValidationExpanded(!isValidationExpanded);
  };

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
          <button onClick={() => navigate("/")} className="text-blue-600 hover:text-blue-700 transition-colors">
            Return to home
          </button>
        </div>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
  };

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
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Users size={18} className="text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Client</div>
                <div className="text-gray-900">Mekorot - Israel Water Company</div>
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

          <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6 font-[Actor]">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            It all began with a vision. What if engineers could approach infrastructure and construction planning the way UI designers work with Design Systems — drawing from a rich, predefined library of 3D BIM elements to bring their projects to life with consistency, efficiency, and precision?
          </p>
        </motion.div>
      </section>

      {/* Video Player */}
      {project.videoUrl && (
        <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
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

      {/* Design Concept and Design Validation Section */}
      <section ref={sectionRef} className="max-w-5xl mx-auto px-6 lg:px-12 mb-16 relative">
        <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 font-[Actor]">Research Highlights</h2>
        <motion.div
          initial={false}
          animate={{ maxHeight: isValidationExpanded ? "3000px" : "280px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden relative"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-purple-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Challenges</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                1. The workflow needs to accommodate diverse persona types from multiple organizations, each with their own priorities and interests — all converging within a single, unified process.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                2. Delivering the end-to-end solution demanded development across multiple tools and technology stacks:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                - A SaaS-based CMS for managing the element library and its associated datasets
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                - Native integration of library elements within the design tools used by engineers and architects — including Autodesk Revit, Civil3D, Plant3D, and more to come
              </p>
              <p className="text-gray-600 leading-relaxed">
                - A Project Analytics Report within the SaaS platform, enabling Project Managers to monitor library element usage through a dynamic, self-compliance ranking system
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck size={24} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Personas & Motivations</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                While all personas operate within the same workflow, each is driven by a distinct set of goals and incentives:
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                1. Library Owner (Client-side) — Motivated by the vision of a single source of truth, the Library Owner aims to consolidate all technical and procurement requirements within the design assets themselves.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                2. Project Manager (Client-side) — Focused on project compliance, the Project Manager is motivated to ensure that engineering and planning teams actively adopt library elements, aligning their work with the required standards and specifications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                3. Planning professionals who traditionally rely on their own design assets while manually interpreting standards documents. Their motivation is to achieve the required compliance with standards and requirements more quickly and with less friction.
              </p>
            </motion.div>
          </div>

          {!isValidationExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </motion.div>

        <div className="flex justify-center mt-6">
          <button onClick={handleToggle} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium">
            {isValidationExpanded ? (
              <><ChevronUp size={20} /> Collapse</>
            ) : (
              <><ChevronDown size={20} /> Expand to read all</>
            )}
          </button>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="carousel-container"
        >
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="outline-none">
                <div className="aspect-video rounded-2xl overflow-hidden mx-2">
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>

      {/* Design Validation Results */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-20 mb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-12 font-[Actor] text-center">
            Results
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-orange-50 rounded-2xl mb-6">
                <Rocket size={40} className="text-orange-500" strokeWidth={1.5} />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Active within more than <strong className="font-bold text-gray-900">100 projects</strong> during 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-green-50 rounded-2xl mb-6">
                <ThumbsUp size={40} className="text-green-600" strokeWidth={1.5} />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Now onboarding 2 new major enterprises
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
        >
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
