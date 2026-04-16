import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Play, Users, Clock, Building2, Sparkles } from "lucide-react";
import { projects, Project } from "../../data/projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import img7DashboardAll1 from "figma:asset/418acd4ffba7074270c822e61977bb5208a3d670.png";
import img6Dashboard2 from "figma:asset/c20ee02e009a7c2f87dba4291c1ae1984adc387f.png";
import img3DansPage1 from "figma:asset/78a77931b6bc86153b352e6ee7e69c747831887d.png";
import img4NativeMen1 from "figma:asset/3feaa759964b53942df4c091bab9013ef366fd15.png";
import img5DansPageNotification1 from "figma:asset/bc3ffec910235d66d6c66d7e71f4958163d24a8f.png";
import workshopImage from "figma:asset/dee6f445e99c1e80101bc5b66d8617fe683d31bf.png";

export function EcommerceOptimization() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === "ecommerce-optimization");
  const [showVideo, setShowVideo] = useState(false);

  // DEBUG: Log imported values
  console.log("Workshop imports:", {
    workshopImage
  });
  console.log("Masonry imports:", {
    img7DashboardAll1,
    img6Dashboard2
  });

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

  // Masonry images data
  const masonryImages = [
    {
      src: img7DashboardAll1,
      caption: "1. Home status - all users"
    },
    {
      src: img6Dashboard2,
      caption: "2. Only active users\n\"Why is Dan at home now?\""
    },
    {
      src: img3DansPage1,
      caption: "3. Focus on Dan's activity\n\"He's playing Xbox instead of school time?! I'll give him a call...\""
    },
    {
      src: img4NativeMen1,
      caption: "4. Postpone the limit notification\n\"The teacher is sick, and he will be soon on homework, he promised!\""
    },
    {
      src: img5DansPageNotification1,
      caption: "5. All under control\n\"Such a good boy :) I'll give him an extra 15 minutes...\""
    }
  ];

  // Workshop slider images - directly use imported variables
  const workshopSlides = [
    { src: workshopImage }
  ];

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
                <div className="text-gray-900">Amdocs</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Users size={18} className="text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Client</div>
                <div className="text-gray-900">Amdocs, Marketing Lab</div>
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
            An Amdocs initiative to bring a home WiFi traffic and activity management application to market. I led the project through its early research and design phases, delivering within a tight timeframe.
          </p>
        </motion.div>
      </section>

      {/* Masonry Image Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2, 1200: 3 }}>
            <Masonry gutter="24px">
              {masonryImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-auto object-cover"
                    />
                    {/* Caption on hover with dark background */}
                    <div className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#23293b] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] px-9 pt-12 pb-12 inline-block">
                        <h3 className="text-[#c2bd7f] whitespace-pre-line italic">
                          {item.caption}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* CodePen Tile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + masonryImages.length * 0.1 }}
                className="group relative md:col-span-2"
                style={{ width: '100%', gridColumn: 'span 2' }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    height="600"
                    style={{ width: '100%' }}
                    scrolling="no"
                    title="Force-Directed Tree with Animated Bullets"
                    src="https://codepen.io/Instalador-De-Aplicativos/embed/jENWebv?default-tab=result"
                    frameBorder="no"
                    loading="lazy"
                    allowFullScreen={true}
                  />
                  {/* Caption on hover with dark background */}
                  <div className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#23293b] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] px-9 pt-12 pb-12 inline-block">
                      <h3 className="text-[#c2bd7f] whitespace-pre-line italic">
                        I crafted the UI navigation experience based on inspiration from tech-innovative coding.
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </section>

      {/* Workshop & Research */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16 relative">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl text-gray-900 mb-4 font-[Actor]">Workshop & Research</h3>
              <p className="text-gray-600 leading-relaxed">
                The project started with a short brief of the business goals by the client.
My first following step: To facilitate a Product Discovery workshop with 12 cross-functional team members — including designers, developers, and stakeholders — to define personas and use cases ahead of the design sprints.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
           
          </motion.div>
        </div>
      </section>

      {/* Main Workshop Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={workshopImage}
              alt="Workshop Research"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Challenge & Solution */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              
              
            </div>

            <div>
              
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              
              
            </div>

            <div>
              
              
            </div>
          </motion.div>
        </div>
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