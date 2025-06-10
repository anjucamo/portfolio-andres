import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="sobremi"
      className="max-w-4xl mx-auto px-4 py-20 text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
      <p className="leading-loose text-lg text-gray-700 dark:text-gray-300">
        Soy tecnólogo con experiencia en desarrollo de sistemas, redes, soporte técnico y hardware electrónico.
        Me caracterizo por ser autodidacta, comprometido y siempre enfocado en resolver problemas reales con tecnología.
      </p>
    </motion.section>
  );
}
