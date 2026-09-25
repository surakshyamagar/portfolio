import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import { experiences } from "../../data/experience";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function Experience() {
  return (
    <section id="experience" className="bg-stone-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Experience & Education"
          title="My journey so far"
          description="Professional experience and education that have shaped my development skills."
        />

        <div className="mx-auto max-w-3xl">
          {experiences.map((experience, index) => {
            const Icon =
              experience.type === "Education"
                ? GraduationCap
                : BriefcaseBusiness;

            return (
              <motion.div
                key={`${experience.role}-${experience.company}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l border-gray-200 pb-10 pl-8 last:pb-0"
              >
                <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border-4 border-stone-50 bg-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                <p className="text-sm font-medium text-emerald-600">
                  {experience.period}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <Icon size={18} className="text-gray-400" />

                  <h3 className="font-bold text-gray-900">
                    {experience.role}
                  </h3>
                </div>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  {experience.company}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {experience.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Experience;