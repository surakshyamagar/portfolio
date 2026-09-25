import { motion } from "framer-motion";
import { Code2, Database, Server } from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Building responsive interfaces with React and modern web technologies.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Building REST APIs and server-side applications with Node.js and Express.",
  },
  {
    icon: Database,
    title: "Databases",
    description:
      "Working with PostgreSQL, MongoDB and database design for application development.",
  },
];

function About() {
  return (
    <section id="about" className="border-y border-gray-200 bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="Building software with purpose"
          description="A little about my background and what I enjoy working on."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base leading-8 text-gray-600"
            >
              I'm a Software Engineering graduate interested in full-stack web
              development and building practical software applications. I enjoy
              turning ideas into working solutions and learning how different
              parts of a software system work together.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 text-base leading-8 text-gray-600"
            >
              I've built projects using React, Node.js, Express, MongoDB,
              PostgreSQL and REST APIs. Through these projects, I've developed
              a growing interest in backend development, API design, databases
              and building complete full-stack applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5 text-base leading-8 text-gray-600"
            >
              I'm looking for opportunities where I can apply what I've
              learned, contribute to real projects and continue developing my
              skills as a software developer.
            </motion.p>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
                className="group flex gap-4 rounded-2xl border border-gray-200 bg-stone-50 p-5 transition-all duration-300 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;