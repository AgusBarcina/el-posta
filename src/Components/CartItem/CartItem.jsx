import React from 'react';

const CartItem = ({ product }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={product.img} alt={product.titulo} style={{ width: '80px', marginRight: '20px', borderRadius: '8px' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>{product.titulo}</h4>
        <p style={{ margin: '0 0 5px 0' }}>Precio: ${product.precio}</p>
        <p style={{ margin: '0 0 10px 0' }}>Subtotal: ${(product.precio * product.cantUnits).toFixed(2)}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="number"
            min="1"
            value={product.cantUnits}
            style={{ width: '60px', marginRight: '10px' }}
          />
          <button /* onClick={...} */>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;