import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { skillGroups } from "../../data/skills";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  "Machine Learning": BrainCircuit,
  "Tools & Platforms": Wrench,
};

function Skills() {
  return (
    <section id="skills" className="bg-stone-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          description="A selection of technologies and tools I use to build modern full-stack applications."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.title] || Wrench;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-medium tracking-wider text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-semibold text-gray-900">
                  {group.title}
                </h3>

                <div className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08 + 0.15,
                      }}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>

                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Skills;