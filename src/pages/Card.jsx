import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import "./card.css";

const Card = ({
  idFirebase,
  image,
  description,
  price,
  title,
  category,
  stock,
}) => {
  const { addProduct } = useContext(ShopContext);
  const [itemCount, setItemCount] = useState(1);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const db = getFirestore();
      const productosCol = collection(db, 'productos');
      const snapshot = await getDocs(productosCol);
      const productosLista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosLista);
      setLoading(false);
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  const handleIncrement = () => {
    if (itemCount < stock) setItemCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (itemCount > 1) setItemCount(prev => prev - 1);
  };

  const handleAddToCart = () => {
  addProduct({
    idFirebase,
    titulo: title,
    precio: price,
    img: image,
    description,
    cantUnits: itemCount,
    stock
  });
};


  return (
    <div
      className='cards-container'
      style={{
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '300px',
        margin: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: 'auto' }}
        />
        <div
          style={{
            flexGrow: 1,
            padding: '16px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", 
          }}
        >
          <div>
            <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
            <p style={{ margin: '0 0 16px 0', color: '#555' }}>{description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Precio: ${price}</p>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <button
                onClick={(e) => { e.stopPropagation(); handleDecrement(); }}
                style={{ padding: '4px 8px' }}
              >
                -
              </button>
              <span style={{ margin: '0 12px' }}>{itemCount}</span>
              <button
                onClick={(e) => { e.stopPropagation(); handleIncrement(); }}
                style={{ padding: '4px 8px' }}
              >
                +
              </button>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
              style={{
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                width: "100%", 
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;