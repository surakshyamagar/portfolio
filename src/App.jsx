import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import TechnicalHighlights from "./components/sections/TechnicalHighlights";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechnicalHighlights />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;