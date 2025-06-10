import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (modoOscuro) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [modoOscuro]);

  return (
    <div className="font-sans bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white scroll-smooth">
      {/* Botón modo oscuro */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded shadow hover:scale-105 transition"
        >
          {modoOscuro ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </div>

      <Navbar />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

