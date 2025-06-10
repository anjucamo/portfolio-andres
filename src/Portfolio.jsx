import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from 'react-icons/fa';
import ContactoForm from "./ContactoForm";

export default function Portfolio() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    modoOscuro ? root.classList.add('dark') : root.classList.remove('dark');
  }, [modoOscuro]);

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

      {/* BOTÓN MODO OSCURO */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded shadow hover:scale-105 transition"
        >
          {modoOscuro ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Andrés Cardozo</h1>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
            <li><a href="#sobremi" className="hover:text-blue-500">Sobre mí</a></li>
            <li><a href="#proyectos" className="hover:text-blue-500">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-600 to-blue-500 text-white pt-20">
        <motion.img
          src="/perfil.png"
          alt="Perfil"
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Andrés Julián Cardozo
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Desarrollador | Redes | Soporte Técnico
        </motion.p>
        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a href="#contacto" className="bg-white text-blue-600 px-5 py-2 rounded shadow hover:bg-blue-100 flex items-center gap-2">
            <FaEnvelope /> Contáctame
          </a>
          <a href="/proyectos/cv.pdf" download className="border border-white px-5 py-2 rounded hover:bg-white hover:text-blue-600 flex items-center gap-2">
            <FaDownload /> CV
          </a>
        </motion.div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobremi" className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
        <p className="leading-relaxed">
          Soy tecnólogo con experiencia en desarrollo de software, redes, soporte técnico y electrónica. Me gusta aprender por mi cuenta y me motiva resolver problemas con tecnología.
        </p>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Proyecto 1 */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <img src="https://via.placeholder.com/400x250" alt="Proyecto 1" className="rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">Proyecto Medidor</h3>
              <p className="text-sm mb-3">Sistema de medición y monitoreo remoto.</p>
              <a href="#" target="_blank" className="text-blue-600 hover:underline text-sm font-medium">Ver más</a>
            </motion.div>

            {/* Proyecto 2 */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <img src="https://via.placeholder.com/400x250" alt="Proyecto 2" className="rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">Proyecto Soporte</h3>
              <p className="text-sm mb-3">Soporte técnico integral para redes y PCs.</p>
              <a href="#" target="_blank" className="text-blue-600 hover:underline text-sm font-medium">Ver más</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-4 bg-blue-100 dark:bg-gray-700">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contáctame</h2>
          <p className="mb-6">¿Tienes un proyecto o necesitas ayuda? Escríbeme.</p>
          <ContactoForm />
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/573054277020"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        title="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t dark:border-gray-600">
        © {new Date().getFullYear()} Andrés Cardozo
      </footer>
    </div>
  );
}
