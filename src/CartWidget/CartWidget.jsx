import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';

const CartWidget = () => {
  const { totalunidades, shopVec } = useContext(ShopContext);
  const [hovering, setHovering] = useState(false);

  
  const subtotal = shopVec.reduce(
    (acc, item) => acc + item.precio * item.cantUnits,
    0
  );

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="https://images.vexels.com/media/users/3/132114/isolated/preview/5367202ad4dd11725544cb3008049f96-icono-plano-de-carrito-de-compras.png"
          alt="Carrito"
          style={{ width: '40px', height: '40px', cursor: 'pointer' }}
        />
        {totalunidades > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              border: '2px solid white'
            }}
          >
            {totalunidades}
          </div>
        )}
      </div>

      {hovering && totalunidades > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '0',
            width: '350px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            padding: '10px',
            borderRadius: '8px',
            zIndex: 1000,
            fontFamily: 'Arial, sans-serif',
            maxHeight: '400px',
            overflowY: 'auto'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img
              src="https://images.vexels.com/media/users/3/132114/isolated/preview/5367202ad4dd11725544cb3008049f96-icono-plano-de-carrito-de-compras.png"
              alt="Carrito"
              style={{ width: '50px', height: '50px', marginRight: '10px' }}
            />
            <div>
              <h4 style={{ margin: 0 }}>Carrito</h4>
              <p style={{ margin: 0 }}>Productos en el carrito: {totalunidades}</p>
            </div>
          </div>
          {shopVec.map((item) => {
            const totalPrice = item.precio * item.cantUnits;
            return (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <img
                  src={item.img}
                  alt={item.titulo}
                  style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold' }}>{item.titulo}</div>
                  <div>Cantidad: {item.cantUnits}</div>
                  <div>Precio total: ${totalPrice.toFixed(2)}</div>
                </div>
              </div>
            );
          })}
          <div style={{ textAlign: 'right', marginTop: '10px', fontWeight: 'bold' }}>
            Subtotal: ${subtotal.toFixed(2)}
          </div>
          <button
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
            onClick={() => alert('Finalizar compra')}
          >
            FINALIZAR COMPRA
          </button>
        </div>
      )}
    </div>
  );
};

export default CartWidget;