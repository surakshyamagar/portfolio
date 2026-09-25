import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="border-y border-gray-200 bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Some things I've built"
          description="A selection of projects that demonstrate my experience building full-stack applications, APIs, databases and machine-learning solutions."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col rounded-2xl border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 ${
                project.featured
                  ? "border-emerald-100 hover:border-emerald-300"
                  : "border-gray-200 hover:border-emerald-200"
              }`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                {(project.github !== "#" || project.live !== "#") && (
                  <div className="flex shrink-0 gap-2">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-emerald-500 hover:text-emerald-600"
                      >
                        <FaGithub size={17} />
                      </a>
                    )}

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live project`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-emerald-500 hover:text-emerald-600"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <p className="flex-1 text-sm leading-7 text-gray-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;