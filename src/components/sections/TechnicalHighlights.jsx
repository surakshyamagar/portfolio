import { motion } from "framer-motion";
import {
  Database,
  GitBranch,
  LockKeyhole,
  BrainCircuit,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const highlights = [
  {
    icon: GitBranch,
    title: "Backend & APIs",
    description:
      "Building REST APIs with Node.js and Express, including authentication, validation, error handling and API integration.",
    technologies: ["Node.js", "Express", "REST APIs", "Zod"],
  },
  {
    icon: Database,
    title: "Database Development",
    description:
      "Designing and working with relational and NoSQL databases for full-stack applications.",
    technologies: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose"],
  },
  {
    icon: LockKeyhole,
    title: "Application Security",
    description:
      "Implementing authentication, protected routes, password hashing, HTTP-only cookies and input validation.",
    technologies: ["JWT", "bcrypt", "Zod", "HTTP-only Cookies"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Building and integrating machine-learning models into practical applications for prediction and analysis.",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Flask"],
  },
];

function TechnicalHighlights() {
  return (
    <section id="highlights" className="bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="Technical Highlights"
          title="What I enjoy building"
          description="Some of the technical areas I've explored through my projects and development work."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {highlights.map(
            ({ icon: Icon, title, description, technologies }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group rounded-2xl border border-gray-200 bg-stone-50 p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-semibold text-gray-900">{title}</h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

export default TechnicalHighlights;