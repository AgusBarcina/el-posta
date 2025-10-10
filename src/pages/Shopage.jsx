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
    <div style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Carrito />
    </div>
  );
};

export default ShopPage;