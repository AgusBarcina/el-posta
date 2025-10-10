import React, { useState } from 'react';
import "./CheckoutForm.css"

const CheckoutForm = () => {
  // Estados para los datos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [codigoCompra, setCodigoCompra] = useState('');
  const [mensajeCompra, setMensajeCompra] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generar un código de compra único (puedes mejorar esto)
    const nuevoCodigo = 'COMPRA-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setCodigoCompra(nuevoCodigo);

    // Mostrar mensaje de agradecimiento
    setMensajeCompra('Muchas gracias por confiar en Tienda Pc Gamer, te enviaremos un email con los detalles de la compra.');
    setMostrarMensaje(true);

    // Aquí puedes también enviar los datos a tu backend o base de datos si quieres
  };
<br />

  return (
    
    <div className="checkout">
      {/* Aquí envolvemos todo en el div con className "checkout" */}
      <div style={{ maxWidth: '500px', display: "flex", justifyContent: "center" }}>
        {!mostrarMensaje ? (
          <form onSubmit={handleSubmit}>
            <h2>Formulario de Compra</h2>
            
            <div style={{ marginBottom: '10px' }}>
              <label>Nombre:</label><br />
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label>Email:</label><br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label>Dirección:</label><br />
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label>Teléfono:</label><br />
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                style={{ width: '100%' }}
              />
            </div>

            <button type="submit">Enviar</button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc' }}>
            <h2>Código de compra: {codigoCompra}</h2>
            <p>{mensajeCompra}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;