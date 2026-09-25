import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

import Container from "../common/Container";
import Button from "../common/Button";
import profileImage from "../../assets/images/MY.png";
import cvFile from "../../assets/resume/myCV.pdf";

function Hero() {
return ( <section id="home" className="relative overflow-hidden"> <Container className="flex min-h-[calc(100vh-4rem)] items-center py-20"> <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
<motion.div
initial={{ opacity: 0, y: 25 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
> <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"> <span className="h-2 w-2 rounded-full bg-emerald-500" />
Available for opportunities </div>

```
        <p className="mb-3 text-base font-medium text-gray-600">
          Hello, I'm
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-6xl">
          Surakshya Roka{" "}
          <span className="text-emerald-600">Magar</span>
        </h1>

        <h2 className="mt-5 text-xl font-semibold text-gray-700 sm:text-1xl">
          Software Engineering Graduate & Aspiring Software Developer
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
          I build clean, practical web applications using modern frontend
          and backend technologies. I'm particularly interested in
          full-stack development, backend systems and building real-world
          software solutions.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="projects" smooth duration={500} offset={-70}>
            <Button>View Projects</Button>
          </Link>

          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            <FileText size={17} />
            View CV
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="https://github.com/surakshyamagar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/surakshya-roka-7821a62b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="flex justify-center lg:justify-end"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-5 rounded-[2rem] bg-emerald-100 blur-2xl"
          />

          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            className="relative flex h-80 w-72 items-center justify-center rounded-[2rem] border border-gray-200 bg-white shadow-xl shadow-gray-200/50 sm:h-96 sm:w-80"
          >
            <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-emerald-100 shadow-md">
              <motion.img
                src={profileImage}
                alt="Surakshya Roka Magar"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </Container>

  <Link
    to="about"
    smooth
    duration={500}
    offset={-70}
    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer text-gray-400 transition hover:text-emerald-600 md:block"
    aria-label="Scroll to About section"
  >
    <ArrowDown size={20} />
  </Link>
</section>

);
}

export default Hero;
