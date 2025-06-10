import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="proyectos"
      className="bg-white dark:bg-gray-900 py-20 px-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Proyecto 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 transition"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Proyecto de prueba"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Nombre del proyecto</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Red de cámaras, sitio web, app, sensor, etc.
              </p>
              <a href="#" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                Ver más
              </a>
            </div>
          </motion.div>

          {/* Proyecto 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 transition"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Otro proyecto"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Otro proyecto</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Descripción corta del trabajo realizado.
              </p>
              <a href="#" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                Ver más
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
