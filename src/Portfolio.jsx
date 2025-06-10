import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ContactoForm from "./ContactoForm";

export default function Portfolio() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (modoOscuro) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [modoOscuro]);

  return (
    <div className="font-sans text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-white scroll-smooth">

      {/* BOTÓN MODO OSCURO */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded shadow hover:scale-105 transition"
        >
          {modoOscuro ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      </div>

      {/* NAV */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Andrés Cardozo</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
            <li><a href="#sobremi" className="hover:text-blue-600">Sobre mí</a></li>
            <li><a href="#proyectos" className="hover:text-blue-600">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* HERO */}
      <section id="inicio" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 px-4">
        <motion.img
  src="/perfil.jpg"
  alt="Foto de perfil"
  className="w-32 h-32 rounded-full shadow-lg mb-4 border-4 border-white"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
/>

        <motion.h2 className="text-4xl font-bold mb-2" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          ¡Hola! Soy Andrés Cardozo
        </motion.h2>
        <motion.p className="text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Tecnólogo en desarrollo de sistemas de información y redes
        </motion.p>
        <motion.div className="mt-6 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <a href="#contacto" className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition">Contáctame</a>
          <a href="/cv.pdf" download className="...">Descargar CV</a>


        </motion.div>
      </section>

      {/* SOBRE MÍ */}
      <motion.section id="sobremi" className="max-w-4xl mx-auto px-4 py-20 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
        <p className="leading-loose">
          Soy tecnólogo con experiencia en desarrollo de sistemas, redes, soporte técnico y hardware electrónico.
          Me caracterizo por ser autodidacta, comprometido y siempre enfocado en resolver problemas reales con tecnología.
        </p>
      </motion.section>

      {/* PROYECTOS */}
      <motion.section id="proyectos" className="bg-white dark:bg-gray-800 py-20 px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Proyecto 1 */}
            <motion.div whileHover={{ scale: 1.03 }} className="rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-700">
              <img src="https://via.placeholder.com/400x250" alt="Proyecto de prueba" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nombre del proyecto</h3>
                <p className="text-sm mb-4">
                  Red de cámaras, sitio web, app, sensor, etc.
                </p>
                <a href="#" target="_blank" className="text-blue-500 hover:underline text-sm font-medium">Ver más</a>
              </div>
            </motion.div>

            {/* Proyecto 2 */}
            <motion.div whileHover={{ scale: 1.03 }} className="rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-700">
              <img src="https://via.placeholder.com/400x250" alt="Proyecto de prueba" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Otro proyecto</h3>
                <p className="text-sm mb-4">
                  Descripción corta del trabajo realizado.
                </p>
                <a href="#" target="_blank" className="text-blue-500 hover:underline text-sm font-medium">Ver más</a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CONTACTO */}
      <motion.section id="contacto" className="py-20 px-4 bg-blue-50 dark:bg-gray-700"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-semibold">Contáctame</h2>
          <p>Envíame un mensaje y te responderé pronto.</p>
          <ContactoForm />
        </div>
      </motion.section>

      {/* BOTÓN WHATSAPP */}
      <motion.a
        href="https://wa.me/573054277020"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.15 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        title="Escríbeme por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t dark:border-gray-600">
        © {new Date().getFullYear()} Andrés Cardozo
      </footer>
    </div>
  );
}
