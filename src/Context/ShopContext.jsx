import React, { createContext, useState } from 'react';

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [shopVec, setShopVec] = useState([]);

  const addProduct = (product) => {
    const uniqueId = `${product.nombre}-${Date.now()}-${Math.random()}`;
    const productWithId = {
      ...product,
      id: uniqueId,
    };
    setShopVec(prev => [...prev, productWithId]);
  };

  const removeProduct = (id) => {
    setShopVec(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newCantidad) => {
    setShopVec(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantUnits: newCantidad } : item
      )
    );
  };

  const totalPrice = shopVec.reduce(
    (acc, item) => acc + item.precio * item.cantUnits,
    0
  );

  const totalunidades = shopVec.reduce(
    (acc, item) => acc + (item.cantUnits || 0),
    0
  );

  return (
    <ShopContext.Provider
      value={{
        shopVec,
        addProduct,
        removeProduct,
        updateQuantity,
        totalPrice,
        totalunidades, 
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };