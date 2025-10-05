import React, { useEffect, useState } from 'react';

const FinalizarCompra = () => {
  const [numeroCompra, setNumeroCompra] = useState('');

  useEffect(() => {
    const numero = localStorage.getItem('numeroCompra');
    setNumeroCompra(numero);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>¡Gracias por tu compra!</h1>
      <p>Tu número de compra es: <strong>{numeroCompra}</strong></p>
    </div>
  );
};

export default FinalizarCompra;