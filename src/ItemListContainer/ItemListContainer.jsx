import React from 'react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div>
      <h2>{mensaje}</h2>
      {mensaje}
    </div>
  );
};

export default ItemListContainer;