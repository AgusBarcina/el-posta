import React, { createContext, useState } from 'react';

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [shopVec, setShopVec] = useState([]);

  const addProduct = (product) => {
    const { idFirebase, cantUnits, stock, titulo } = product;

    // Validación antes de actualizar el estado
    const existingProduct = shopVec.find(item => item.idFirebase === idFirebase);

    if (existingProduct) {
      const currentUnits = existingProduct.cantUnits;
      const newTotal = currentUnits + cantUnits;

      if (newTotal > stock) {
        alert(`No puedes agregar ${cantUnits} unidades más de ${titulo}. Ya tienes ${currentUnits} en el carrito y el stock máximo es ${stock}.`);
        return; // Salgo sin actualizar estado
      }
    } else if (cantUnits > stock) {
      alert(`No puedes agregar más de ${stock} unidades de ${titulo}.`);
      return; // Salgo sin actualizar estado
    }

    // Si pasa las validaciones, actualizo el estado
    setShopVec(prev => {
      if (existingProduct) {
        return prev.map(item =>
          item.idFirebase === idFirebase
            ? { ...item, cantUnits: item.cantUnits + cantUnits }
            : item
        );
      } else {
        return [...prev, { ...product, id: `${idFirebase}-${Date.now()}` }];
      }
    });
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
