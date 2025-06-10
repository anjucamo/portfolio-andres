import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa'
import ContactoForm from './ContactoForm'

export default function Portfolio() {
  const [modoOscuro, setModoOscuro] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', modoOscuro)
  }, [modoOscuro])

  const proyectos = [
    {
      titulo: 'Medidor IoT',
      desc: 'Sistema de medición y monitoreo remoto.',
      img: '/img/proyecto1.jpg',
      url: '#'
    },
    {
      titulo: 'Soporte TI',
      desc: 'Gestión de redes y soporte técnico.',
      img: '/img/proyecto2.jpg',
      url: '#'
    }
  ]

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Toggle oscuro */}
      <button
        onClick={() => setModoOscuro(!modoOscuro)}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition"
      >
        {modoOscuro ? <FaSun /> : <FaMoon />}
      </button>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Andrés Cardozo</h1>
          <ul className="hidden md:flex gap-6">
            {['inicio', 'sobre', 'proyectos', 'contacto'].map((id, i) => (
              <li key={i}>
                <a href={`#${id}`} className="hover:text-blue-500 capitalize">{id}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-tr from-blue-600 to-indigo-700 px-4 pt-20">
        <motion.img
          src="/perfil.png"
          alt="Andrés perfil"
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >¡Hola! Soy Andrés Cardozo</motion.h2>
        <motion.p className="text-lg md:text-xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >Desarrollador | Tecnólogo en sistemas y redes</motion.p>
        <motion.div className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#contacto" className="bg-white text-blue-600 px-6 py-3 rounded-full shadow hover:bg-gray-100 flex items-center gap-2">
            <FaWhatsapp /> Contáctame
          </a>
          <a href="/cv.pdf" download className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 flex items-center gap-2">
            Descargar CV
          </a>
        </motion.div>
      </section>

      {/* Sobre mí */}
      <section id="sobre" className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
        <p className="leading-relaxed">
          Tecnólogo en desarrollo de sistemas de información y redes, apasionado por la tecnología y la solución de problemas.
        </p>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
        <h2 className="text-3xl text-center font-semibold mb-12">Proyectos</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <img src={p.img} alt={p.titulo} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.titulo}</h3>
                <p className="text-sm mb-4">{p.desc}</p>
                <a href={p.url} className="text-blue-600 hover:underline font-medium">Ver más</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 bg-blue-100 dark:bg-gray-700">
        <h2 className="text-3xl font-semibold text-center mb-6">Contáctame</h2>
        <div className="max-w-xl mx-auto">
          <ContactoForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8 text-center space-y-4">
        <div className="flex justify-center gap-6">
          <a href="https://github.com/anjucamo" target="_blank" rel="noopener"><FaGithub size={24}/></a>
          <a href="https://linkedin.com/in/andrescardozomoreno" target="_blank" rel="noopener"><FaLinkedin size={24}/></a>
          <a href="https://wa.me/573054277020" target="_blank" rel="noopener"><FaWhatsapp size={24}/></a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">© {new Date().getFullYear()} Andrés Cardozo</p>
      </footer>
    </div>
  )
}

