import { useState } from 'react';

export default function ContactoForm() {
  const [estado, setEstado] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    const response = await fetch("https://formspree.io/f/xnnvpybk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setEstado('enviado');
      e.target.reset();
    } else {
      setEstado('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" type="text" placeholder="Tu nombre" required className="w-full border p-2 rounded" />
      <input name="email" type="email" placeholder="Tu correo" required className="w-full border p-2 rounded" />
      <textarea name="message" rows="4" placeholder="Mensaje" required className="w-full border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
      {estado === 'enviado' && <p className="text-green-600">Mensaje enviado ✅</p>}
      {estado === 'error' && <p className="text-red-600">Hubo un error ❌</p>}
    </form>
  );
}
