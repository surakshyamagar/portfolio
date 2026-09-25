import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navItems = [
  { name: "About", target: "about" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  { name: "Highlights", target: "highlights" },
  { name: "Experience", target: "experience" },
  { name: "Contact", target: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-gray-200/80 bg-white/90 shadow-lg shadow-gray-200/30 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <Link
              to="home"
              smooth
              duration={500}
              className="group cursor-pointer text-xl font-bold tracking-tight text-gray-900"
            >
              Surakshya
              <span className="text-emerald-600 transition-colors duration-200 group-hover:text-emerald-500">
                .
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  smooth
                  duration={500}
                  offset={-90}
                  activeClass="bg-emerald-50 text-emerald-700"
                  spy
                  className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-emerald-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-90}
              className="hidden cursor-pointer rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md md:inline-flex"
            >
              Let's Talk
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-gray-200 p-2 text-gray-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-gray-100 px-3 pb-3 md:hidden">
              <nav className="pt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.target}
                    to={item.target}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={closeMenu}
                    className="block cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={closeMenu}
                  className="mt-2 flex cursor-pointer items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Let's Talk
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;