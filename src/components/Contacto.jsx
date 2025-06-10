import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import ContactoForm from "./ContactoForm";

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-4 bg-blue-50 dark:bg-gray-700">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <motion.h2
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contáctame
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Envíame un mensaje y te responderé pronto.
        </motion.p>
        <ContactoForm />
      </div>

      {/* BOTÓN WHATSAPP */}
      <motion.a
        href="https://wa.me/573054277020"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.15 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        title="Escríbeme por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </section>
  );
}
