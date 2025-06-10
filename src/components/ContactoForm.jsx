import { useState } from "react";

export default function ContactoForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
      />
      <textarea
        name="mensaje"
        placeholder="Tu mensaje"
        value={form.mensaje}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        rows="5"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
