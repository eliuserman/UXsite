import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Play, Users, Clock, Building2, Sparkles, Eye, Target, Palette, ClipboardCheck, ChevronDown, ChevronUp, CheckCircle2, BadgeCheck } from "lucide-react";
import { projects } from "../../data/projects";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bankingAppImage from "@/assets/7f87584dfef486bea3c284234f73498dd67c9819.png";
import bimmatchSlide1 from "@/assets/a1a53eff92385e7a516310af535124d0b95a24e3.png";
import bimmatchSlide2 from "@/assets/1075bd2bd7769c20a9d931b7ffdc0b20cdf89c90.png";
import bimmatchSlide3 from "@/assets/6cc191ff832474bb7684a41cadb9fffe197efa33.png";
import bimmatchSlide4 from "@/assets/9b0308f19eeb0f291eed688420838d7ee46a7c88.png";

export function MobileBankingRedesign() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === "connecting-visual-text-data");
  const [showVideo, setShowVideo] = useState(false);
  const [isValidationExpanded, setIsValidationExpanded] = useState(false);
  const [isSecondSectionExpanded, setIsSecondSectionExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const secondSectionRef = useRef<HTMLElement>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle toggle with scroll to section when collapsing
  const handleToggle = () => {
    if (isValidationExpanded && sectionRef.current) {
      // Collapsing - scroll to top of section
      const yOffset = -100;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsValidationExpanded(!isValidationExpanded);
  };

  // Handle second section toggle
  const handleSecondToggle = () => {
    if (isSecondSectionExpanded && secondSectionRef.current) {
      const yOffset = -100;
      const y = secondSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsSecondSectionExpanded(!isSecondSectionExpanded);
  };

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
    if (imageSrc === "/assets/7f87584dfef486bea3c284234f73498dd67c9819.png") {
      return bankingAppImage;
    } else if (imageSrc === "/assets/a1a53eff92385e7a516310af535124d0b95a24e3.png") {
      return bimmatchSlide1;
    } else if (imageSrc === "/assets/1075bd2bd7769c20a9d931b7ffdc0b20cdf89c90.png") {
      return bimmatchSlide2;
    } else if (imageSrc === "/assets/6cc191ff832474bb7684a41cadb9fffe197efa33.png") {
      return bimmatchSlide3;
    } else if (imageSrc === "/assets/9b0308f19eeb0f291eed688420838d7ee46a7c88.png") {
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
                <div className="text-gray-900">VORM - Construction Company, Netherlands</div>
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
            At the heart of Bimmatch is an AI Chat that serves engineers, architects, contractors, and owners alike. Users can pose any question or raise any issue, and receive intelligent responses that are contextually tied a specific 3D BIM element with a precise text info from the relevant project documentation.
          </p>
        </motion.div>
      </section>

      {/* Image Carousel */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="carousel-container"
        >
          <Slider {...sliderSettings}>
            {project.images.map((image, index) => (
              <div key={index} className="outline-none">
                <div className="aspect-video rounded-2xl overflow-hidden mx-2 bg-gray-100">
                  <ImageWithFallback
                    src={getImageSrc(image)}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>

      {/* Project Content - Overview & Challenge */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Overview</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Bimmatch is an AI SaaS platform that manages construction data projects.
                The two main data pillars of modern construction projects are:
                3D BIM (Building Information Modeling) data
                Related documents' text data (Specifications, Standards, RFIs, Submittals, and more).
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
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-purple-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Challenge</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Integrating AI capabilities into the Bimmatch solution opened significant new possibilities — but introduced an equally significant usability challenge: maintaining coherent, multi-directional connections between data sources and the AI Chat, while preserving Bimmatch's existing features and keeping the user consistently oriented throughout.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Player */}
      {project.videoUrl && (
        <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl text-gray-900 mb-6 font-[Actor]">How it looked like before connecting the data dots...</h3>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`${project.videoUrl}${project.videoUrl.includes('?') ? '&' : '?'}modestbranding=1&rel=0&showinfo=0&controls=1&fs=0`}
                title="Project video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* Overview - Full Width */}
      <section ref={sectionRef} className="max-w-5xl mx-auto px-6 lg:px-12 mb-16 relative">
        <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 font-[Actor]">
          Design Concept and Design Validation
        </h2>
        <motion.div
          initial={false}
          animate={{
            maxHeight: isValidationExpanded ? "3000px" : "280px",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden relative"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Palette size={24} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Design Concept</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each AI Chat response is grounded in specific sources — a text chunk from a document, data from a BIM element, or both. To keep users connected to these sources, three interaction patterns were designed:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Text sources such as document pages are available as hyperlinks within the response, opening in a floating panel for quick reference without breaking the flow.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Relevant BIM elements are available as hyperlinks in the response, allowing users to navigate instantly to the corresponding location in the 3D model.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Those same elements are highlighted in the 3D model with clickable bullets, ensuring the spatial context of every response remains visible and accessible at a glance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck size={24} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Design Validation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                I conducted moderated usability testing with three engineers — representative of the target user group — guiding each participant through the following workflow within a specific project:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Ask a question in the AI Chat <span className="text-sm text-gray-500">(the question was provided ready)</span></p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to type the question in the ASK field</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Where was this response taken from? <span className="text-sm text-gray-500">(indicating the user to look at a response from a document)</span></p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to indicate the document hyperlink at the bottom of the response</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">How can you refer to the source of this response?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to click the hyperlink (opens the Details panel with the document that auto-scrolls to the relevant page)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">How can you get back to the chat itself?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to click the chevron to slide out the panel</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Where was this response taken from? <span className="text-sm text-gray-500">(indicating the user to look at a response with BIM element data that was not selected initially in the BIM view)</span></p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to indicate the element hyperlink at the bottom of the response</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Where do you see this element in the 3D view?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to indicate the right element bullet in the 3D view</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Where do you see this element in the BOM view?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to switch to the BOM view and reach the relevant row by following the bullets' indications</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">How can you refer to the source of this response?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to click on either the element bullet in the 3D/BOM view, or the hyperlink in the AI Chat</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">How can you ask the AI Chat about this specific element?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to click the "Select the element" button (this action selects the element in the 3D/BOM view and closes the Details floating panel to reveal the AI Chat)</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {!isValidationExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </motion.div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleToggle}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            {isValidationExpanded ? (
              <>
                <ChevronUp size={20} />
                Collapse
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                Expand to read all
              </>
            )}
          </button>
        </div>
      </section>
      <section ref={secondSectionRef} className="max-w-5xl mx-auto px-6 lg:px-12 mb-16 relative">
        <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 font-[Actor]">
          Design Concept and Design Validation
        </h2>
        <motion.div
          initial={false}
          animate={{
            maxHeight: isSecondSectionExpanded ? "3000px" : "280px",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden relative"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Palette size={24} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Design Concept</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each AI Chat response is grounded in specific sources — a text chunk from a document, data from a BIM element, or both. To keep users connected to these sources, three interaction patterns were designed:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Text sources such as document pages are available as hyperlinks within the response, opening in a floating panel for quick reference without breaking the flow.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Relevant BIM elements are available as hyperlinks in the response, allowing users to navigate instantly to the corresponding location in the 3D model.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Those same elements are highlighted in the 3D model with clickable bullets, ensuring the spatial context of every response remains visible and accessible at a glance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck size={24} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Design Validation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                I conducted moderated usability testing with three engineers — representative of the target user group — guiding each participant through the following workflow within a specific project:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Ask a question in the AI Chat <span className="text-sm text-gray-500">(the question was provided ready)</span></p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to type the question in the ASK field</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Where was this response taken from? <span className="text-sm text-gray-500">(indicating the user to look at a response from a document)</span></p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to indicate the document hyperlink at the bottom of the response</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">How can you refer to the source of this response?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to click the hyperlink (opens the Details panel with the document that auto-scrolls to the relevant page)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">How can you get back to the chat itself?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to click the chevron to slide out the panel</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Where was this response taken from? <span className="text-sm text-gray-500">(indicating the user to look at a response with BIM element data that was not selected initially in the BIM view)</span></p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to indicate the element hyperlink at the bottom of the response</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Where do you see this element in the 3D view?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to indicate the right element bullet in the 3D view</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">Where do you see this element in the BOM view?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to switch to the BOM view and reach the relevant row by following the bullets' indications</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">How can you refer to the source of this response?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to click on either the element bullet in the 3D/BOM view, or the hyperlink in the AI Chat</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium mb-2">How can you ask the AI Chat about this specific element?</p>
                  <p className="text-gray-600 text-sm italic">Expecting the user to click the "Select the element" button (this action selects the element in the 3D/BOM view and closes the Details floating panel to reveal the AI Chat)</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {!isSecondSectionExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </motion.div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleSecondToggle}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            {isSecondSectionExpanded ? (
              <>
                <ChevronUp size={20} />
                Collapse
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                Expand to read all
              </>
            )}
          </button>
        </div>
      </section>
      {/* Challenge & Solution */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-20 mb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-12 font-[Actor] text-center">
            Design Validation Results
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
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-6 shadow-lg">
                <CheckCircle2 size={48} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl text-gray-900 mb-6 font-[Actor]">1st Iteration</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">66%</strong> users completed the flow without help
                <br />
                <br />
                Average time of approx <strong className="font-bold text-gray-900">6.25 min</strong>
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
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
                <BadgeCheck size={48} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl text-gray-900 mb-6 font-[Actor]">2nd Iteration</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">100%</strong> users completed the flow without help
                <br />
                <br />
                Average time of approx <strong className="font-bold text-gray-900">2 min only</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tags */}

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