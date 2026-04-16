import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Building2, Sparkles, Users } from "lucide-react";
import klilAll from "@/assets/klil_all.png";

export function KlilConfigurator() {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !imgRef.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    offset.current = { x: offset.current.x + dx, y: offset.current.y + dy };
    imgRef.current.style.transform = `translate(${offset.current.x}px, ${offset.current.y}px)`;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = () => {
    isDragging.current = false;
    setDragging(false);
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !imgRef.current) return;
    const dx = e.touches[0].clientX - lastPos.current.x;
    const dy = e.touches[0].clientY - lastPos.current.y;
    offset.current = { x: offset.current.x + dx, y: offset.current.y + dy };
    imgRef.current.style.transform = `translate(${offset.current.x}px, ${offset.current.y}px)`;
    lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const onTouchEnd = () => { isDragging.current = false; };

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

      {/* Hero */}
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
                <div className="text-gray-900">Klil Industries</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <Sparkles size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Role</div>
                <div className="text-gray-900">Product Owner and UX</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6 font-[Actor]">Create your window</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-6">
            Designed and built an online 3D configurator for all Klil's products, doors, and windows, to enable Klil's website visitors and prospective customers to configure a desirable product based on mathematical values and other variables. I started this project with deep technological and usability research before jumping into the design phase.
          </p>
          <div className="flex flex-wrap gap-2">
            {["ConTech", "Research", "Web 3D", "three.js interactivity", "UX/UI Design"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{tag}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Live Configurator */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-gray-900 mb-4 font-[Actor]">Live Configurator</h2>
          <p className="text-gray-600 mb-6 text-sm">Try it — configure a window or door in real time.</p>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg" style={{ height: "680px" }}>
            <iframe
              src="https://klil-bauhaus2600.netlify.app/"
              title="Klil 3D Configurator"
              className="w-full h-full border-0"
              allow="accelerometer; gyroscope"
            />
          </div>
        </motion.div>
      </section>

      {/* Draggable image canvas */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-gray-900 mb-2 font-[Actor]">Product Screens</h2>
          <p className="text-gray-500 text-sm mb-6">Drag the image to explore all screens.</p>
          <div
            ref={canvasRef}
            className={`relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ height: "576px" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              ref={imgRef}
              src={klilAll}
              alt="Klil configurator screens"
              className="absolute top-4 left-4 select-none"
              style={{ maxWidth: "none", userSelect: "none", pointerEvents: "none" }}
              draggable={false}
            />
            {/* Hint overlay — fades out after first drag */}
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-gray-500 text-xs px-3 py-1.5 rounded-full border border-gray-200 pointer-events-none">
              ← drag to explore →
            </div>
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
