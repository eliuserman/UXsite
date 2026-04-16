import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router";

const projects = [
  { id: "connecting-visual-text-data", label: "Connecting visual and text data" },
  { id: "im-free-again", label: "I'm free again! (parents only...)" },
  { id: "klil-configurator", label: "Create your window" },
  { id: "context-performance-cost", label: "Context in the service of performance & cost" },
  { id: "building-blocks", label: "Building blocks" },
  { id: "vodafone-romania", label: "Vodafone Romania Retail App" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const links = [
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const goToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProjectsMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setProjectsOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setProjectsOpen(false), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={goToHome}
            className="text-xl tracking-tight text-gray-900 cursor-pointer"
          >
            Eli Wasserman
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Projects dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProjectsMouseEnter}
              onMouseLeave={handleProjectsMouseLeave}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {projects.map((project) => (
                        <Link
                          key={project.id}
                          to={`/project/${project.id}`}
                          onClick={() => setProjectsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <span className="text-sm text-gray-700 leading-tight">
                            {project.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 px-4 py-3">
                      <button
                        onClick={() => { scrollToSection('projects'); setProjectsOpen(false); }}
                        className="text-xs text-blue-600 hover:text-blue-700 transition-colors font-medium"
                      >
                        View all on home page →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other links */}
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <div className="px-6 py-4 space-y-1">
            <div className="text-xs font-medium uppercase tracking-widest text-gray-400 px-2 pb-2 pt-1">Projects</div>
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-600">{project.label}</span>
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-sm text-gray-600 px-2 py-2.5"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
