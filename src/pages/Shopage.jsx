import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import CartItem from '../Components/CartItem/CartItem';
import Carrito from '../Components/Carrito/Carrito';

const ShopPage = () => {
  const { shopVec, setShopVec, totalPrice } = useContext(ShopContext);
  if (!shopVec || !Array.isArray(shopVec)) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ padding: '20px', width:"100%"}}>
     <br />
      <Carrito />
      {/*
      {shopVec.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {shopVec.map((producto) => (
            <div
              key={producto.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                marginBottom: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                borderRadius: '8px',
              }}
            >
              <CartItem product={producto} />
            </div>
          ))}
        </div>
      )}
      */}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default ShopPage;