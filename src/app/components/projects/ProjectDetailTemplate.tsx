import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Play, Users, Clock, Building2, Sparkles } from "lucide-react";
import { projects, Project } from "../../data/projects";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bankingAppImage from "@/assets/7f87584dfef486bea3c284234f73498dd67c9819.png";
import amdocsAppImage from "@/assets/e83de090439b1fe19ad9a605c2c9b56d4e58c631.png";
import newProjectImage from "@/assets/42c626e673f3c01200577fa14bd31c5dcfd49e82.png";
import buildingBlocksImage from "@/assets/b216ba02fe20ef316352409d4bfc53b041db7e08.png";
import bimmatchSlide1 from "@/assets/a1a53eff92385e7a516310af535124d0b95a24e3.png";
import bimmatchSlide2 from "@/assets/1075bd2bd7769c20a9d931b7ffdc0b20cdf89c90.png";
import bimmatchSlide3 from "@/assets/6cc191ff832474bb7684a41cadb9fffe197efa33.png";
import bimmatchSlide4 from "@/assets/9b0308f19eeb0f291eed688420838d7ee46a7c88.png";

interface ProjectDetailTemplateProps {
  projectId: string;
}

export function ProjectDetailTemplate({ projectId }: ProjectDetailTemplateProps) {
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);
  const [showVideo, setShowVideo] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to navigate to contact section
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

  // Helper function to get the correct image source
  const getImageSrc = (imageSrc: string) => {
    if (imageSrc === "@/assets/7f87584dfef486bea3c284234f73498dd67c9819.png") {
      return bankingAppImage;
    } else if (imageSrc === "@/assets/e83de090439b1fe19ad9a605c2c9b56d4e58c631.png") {
      return amdocsAppImage;
    } else if (imageSrc === "@/assets/42c626e673f3c01200577fa14bd31c5dcfd49e82.png") {
      return newProjectImage;
    } else if (imageSrc === "@/assets/b216ba02fe20ef316352409d4bfc53b041db7e08.png") {
      return buildingBlocksImage;
    } else if (imageSrc === "@/assets/a1a53eff92385e7a516310af535124d0b95a24e3.png") {
      return bimmatchSlide1;
    } else if (imageSrc === "@/assets/1075bd2bd7769c20a9d931b7ffdc0b20cdf89c90.png") {
      return bimmatchSlide2;
    } else if (imageSrc === "@/assets/6cc191ff832474bb7684a41cadb9fffe197efa33.png") {
      return bimmatchSlide3;
    } else if (imageSrc === "@/assets/9b0308f19eeb0f291eed688420838d7ee46a7c88.png") {
      return bimmatchSlide4;
    }
    return imageSrc;
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

          <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6 font-[Actor]">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            It all began with a vision. What if engineers could approach infrastructure and construction planning the way UI designers work with Design Systems — drawing from a rich, predefined library of 3D BIM elements to bring their projects to life with consistency, efficiency, and precision?
          </p>
        </motion.div>
      </section>

      {/* Video Player */}
      {project.videoUrl && (
        <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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

      {/* Image Carousel */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="carousel-container"
        >
          <Slider {...sliderSettings}>
            {project.images.map((image, index) => (
              <div key={index} className="outline-none">
                <div className="aspect-video rounded-2xl overflow-hidden mx-2">
                  <ImageWithFallback
                    src={getImageSrc(image)}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>

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
              <p className="text-gray-600 leading-relaxed">
                {project.content.overview}
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">Research</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.content.research}
              </p>
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
              <p className="text-gray-600 leading-relaxed">
                {project.content.design}
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">Outcome</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.content.outcome}
              </p>
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

      {/* Next Project */}
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