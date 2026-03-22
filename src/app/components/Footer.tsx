import { Linkedin, Github, Twitter, Heart } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const goToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-xl tracking-tight text-gray-900 mb-4">
              Eli Wasserman
            </div>
            <p className="text-gray-600 text-sm max-w-sm">
              UX Expert and Product Strategist, Vast Experience, and Team Leading
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={goToHome}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm text-gray-900 mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/eliwasserman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">eli.userman@gmail.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} Eli Wasserman. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Co-design: Eli Wasserman & Figma Make <Heart size={14} className="text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}