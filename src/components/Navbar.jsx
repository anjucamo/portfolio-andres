import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activo, setActivo] = useState(false);

  const cambiarFondo = () => {
    if (window.scrollY >= 80) {
      setActivo(true);
    } else {
      setActivo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", cambiarFondo);
    return () => window.removeEventListener("scroll", cambiarFondo);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        activo ? "bg-white dark:bg-gray-900 shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Andrés Cardozo
        </h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-800 dark:text-white">
          <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
          <li><a href="#sobremi" className="hover:text-blue-600">Sobre mí</a></li>
          <li><a href="#proyectos" className="hover:text-blue-600">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}
