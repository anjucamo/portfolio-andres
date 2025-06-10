import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 px-4">
   
<motion.img
  src="/perfil.jpg" // o "/perfil.png" si tu archivo termina en .png
  alt="Perfil de Andrés"
  className="rounded-full border-4 border-white w-40 h-40 object-cover"
/>


      <motion.h2
        className="text-4xl font-bold mb-2 text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ¡Hola! Soy Andrés Cardozo
      </motion.h2>
      <motion.p
        className="text-lg text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Tecnólogo en desarrollo de sistemas de información y redes.
      </motion.p>
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a href="#contacto" className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition">Contáctame</a>
        <a href="/cv.pdf" download className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition">Descargar CV</a>
      </motion.div>
    </section>
  );
}
