import { useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Building2, Sparkles, Users, Target, UserCheck, ChevronDown, ChevronUp, Rocket, ThumbsUp, TrendingDown } from "lucide-react";
import { projects } from "../../data/projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import d1 from "@/assets/d1.png";
import d2 from "@/assets/d2.png";
import d3 from "@/assets/d3.png";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";

const sliderImages = [d1, d2, d3];

const masonryImages = [
  { src: m1, caption: "Select filters easily" },
  { src: m2, caption: "Chat in the context" },
  { src: m3, caption: "Quick and accurate responses" },
];

export function ContextPerformanceCost() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === "context-performance-cost");
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleToggle = () => {
    if (isExpanded && sectionRef.current) {
      const yOffset = -100;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsExpanded(!isExpanded);
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
            An AI-powered portal for Mekorot's engineering planning team that enables chat-based access to critical insights from a vast dataset of 500+ engineering specification documents.
          </p>
        </motion.div>
      </section>

      {/* Image Slider */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                      <img src={item.src} alt={item.caption} className="w-full h-auto object-cover" />
                      <div className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#23293b] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] px-9 pt-12 pb-12 inline-block">
                          <h3 className="text-[#c2bd7f] whitespace-pre-line italic">{item.caption}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        </section>

      {/* Research Highlights - Expand/Collapse */}
      <section ref={sectionRef} className="max-w-5xl mx-auto px-6 lg:px-12 mb-16 relative">
        <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 font-[Actor]">Research Highlights</h2>
        <motion.div
          initial={false}
          animate={{ maxHeight: isExpanded ? "3000px" : "280px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden relative"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-pink-500" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Challenges</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                During the development phase, and with first users' interations (Mekorot's pilot testing team), we identified two major challenges associated with working with a large dataset (500+ documents), which we defined as key KPIs:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                  <span><strong className="text-gray-900">Time:</strong> Querying the LLM often took over 30 seconds, and in some cases nearly a full minute, to produce a response.</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                  <span><strong className="text-gray-900">Quality:</strong> Beyond a certain data volume, the rate of LLM hallucinations increased noticeably.</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Additionally, the scale of the dataset led to higher-than-expected LLM token costs.
              </p>
            </motion.div>

            {/* Suggested Design */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck size={24} className="text-blue-600" />
                <h3 className="text-2xl text-gray-900 font-[Actor]">Suggested Design</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                  <span><strong className="text-gray-900">Intelligent Filter Retrieval:</strong> Automatically and dynamically surface the most relevant filters for each document, based on context and query intent.</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                  <span><strong className="text-gray-900">Curated User Controls:</strong> Provide a streamlined UI with a focused set of high-value filters—prioritizing clarity over completeness—to guide users toward the most meaningful selections.</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                  <span><strong className="text-gray-900">Contextual Chat Activation:</strong> Enable AI chat only after at least one filter is selected, ensuring interactions are grounded in a well-defined scope and improving both response speed and accuracy.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </motion.div>

        <div className="flex justify-center mt-6">
          <button onClick={handleToggle} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium">
            {isExpanded ? (
              <><ChevronUp size={20} /> Collapse</>
            ) : (
              <><ChevronDown size={20} /> Expand to read all</>
            )}
          </button>
        </div>
      </section>

      {/* Decision Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 font-[Actor]">Decision</h2>
          <div className="space-y-4">
            {[
              { positive: true, label: "Time", text: "Reducing the amount of data significantly will impact relatively on the time performance." },
              { positive: true, label: "Quality", text: "Reducing the amount of data should reduce LLM hallucinations." },
              { positive: true, label: "Cost", text: "Reducing the amount of data should reduce LLM cost." },
              { positive: true, label: "Data", text: "Keeping the engineer in its own context and interest" },
              { positive: false, label: "Usability", text: "Requires an additional click (filter selection) to initiate the AI Chat" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${item.positive ? "bg-pink-50" : "bg-gray-100"}`}>
                  {item.positive ? (
                    <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.501 4.501 0 001.423.23zM21.669 13.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                    </svg>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed pt-1.5">
                  {item.label && <strong className="text-gray-900">{item.label}</strong>}
                  {item.label && " — "}
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-20 mb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-12 font-[Actor] text-center">Results</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket size={40} className="text-orange-500" strokeWidth={1.5} />,
                bg: "bg-orange-50",
                text: <>Reducing the <strong className="font-bold text-gray-900">Time</strong> to an average of <strong className="font-bold text-gray-900">6 sec</strong> /response</>,
              },
              {
                icon: <ThumbsUp size={40} className="text-blue-600" strokeWidth={1.5} />,
                bg: "bg-blue-50",
                text: <>Responses' <strong className="font-bold text-gray-900">Quality</strong> increased by an average rank of <strong className="font-bold text-gray-900">30%</strong></>,
              },
              {
                icon: <TrendingDown size={40} className="text-green-600" strokeWidth={1.5} />,
                bg: "bg-green-50",
                text: <>LLM models' <strong className="font-bold text-gray-900">Cost</strong> reduced by an average of <strong className="font-bold text-gray-900">35%</strong></>,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`flex items-center justify-center w-20 h-20 ${item.bg} rounded-2xl mb-6`}>
                  {item.icon}
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
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
