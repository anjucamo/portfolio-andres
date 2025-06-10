import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';

export default function Portfolio() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    modoOscuro ? root.classList.add('dark') : root.classList.remove('dark');
  }, [modoOscuro]);

  return (
    <div className="font-sans text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-white scroll-smooth">
      {/* Toggle modo oscuro */}
      <button
        onClick={() => setModoOscuro(!modoOscuro)}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition"
        title="Cambiar modo"
      >
        {modoOscuro ? <FaSun /> : <FaMoon />}
      </button>

      {/* Navegación */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-40"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Andrés Cardozo</h1>
          <ul className="flex gap-4 text-sm">
            <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
            <li><a href="#sobre" className="hover:text-blue-500">Sobre mí</a></li>
            <li><a href="#proyectos" className="hover:text-blue-500">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-tr from-blue-600 to-indigo-700 text-white px-4 pt-20">
        <motion.img
          src="/perfil.jpg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full border-4 border-white shadow mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2 className="text-4xl font-bold mb-2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>¡Hola! Soy Andrés Cardozo</motion.h2>
        <motion.p className="text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Desarrollador y tecnólogo en sistemas de información y redes</motion.p>
        <motion.div className="mt-6 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <a href="#contacto" className="bg-white text-blue-600 px-5 py-2 rounded hover:bg-blue-100 font-medium">Contáctame</a>
          <a href="/cv.pdf" download className="border border-white px-5 py-2 rounded hover:bg-white hover:text-blue-600 font-medium">Descargar CV</a>
        </motion.div>
      </section>

      {/* Footer y redes */}
      <footer className="text-center py-6 text-gray-400 text-sm dark:border-t border-gray-600">
        <div className="flex justify-center gap-6 mb-3">
          <a href="https://github.com/anjucamo" target="_blank" rel="noopener" title="GitHub"><FaGithub size={20} /></a>
          <a href="https://linkedin.com/in/andrescardozomoreno" target="_blank" rel="noopener" title="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="https://wa.me/573054277020" target="_blank" rel="noopener" title="WhatsApp"><FaWhatsapp size={20} /></a>
        </div>
        © {new Date().getFullYear()} Andrés Cardozo
      </footer>
    </div>
  );
}

