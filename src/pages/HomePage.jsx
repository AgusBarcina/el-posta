import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'; 
import Card from './Card';
import NavBar from "../Navbar/NavBar";

const HomePage = () => {
  const [categoryFilter, setCategoryFilter] = useState('todos');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos"); 
        const snapshot = await getDocs(productosRef);
        const productosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(productosData);
        setProductos(productosData);
      } catch (error) {
        console.error("Error cargando productos: ", error);
      }
    };

    fetchProductos();
  }, []);
  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const productosFiltrados = productos.filter(p => 
    categoryFilter === 'todos' || p.category === categoryFilter
  );

  console.log("Productos: ", productos)

  return (
    <div style={{width: "100%"}}>
      <NavBar onFilterChange={handleCategoryChange} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='imgOferta' style={{ display: 'flex', justifyContent: 'center', width: "1300px" }}>
        <img src="https://pcbox.vtexassets.com/assets/vtex.file-manager-graphql/images/0ab7802c-df2f-471c-8828-78ff6bfe2f01___86a500bd0bd336a44ba62c342ca56d9c.jpg" alt="oferta" />
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", flexWrap: 'wrap' }}>
        {productosFiltrados.map((producto, index) => (
          <Card
            key={producto.id}
            image={producto.image}
            title={producto.title}
            description={producto.description}
            price={producto.price}
            category={producto.category}
            stock={producto.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;