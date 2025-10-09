import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
<<<<<<< HEAD
import { db } from '../firebase';
=======
import { db } from '../firebase'; 
>>>>>>> 9bdbed8 (primer commit)
import Card from './Card';
import NavBar from "../Navbar/NavBar";

const HomePage = () => {
  const [categoryFilter, setCategoryFilter] = useState('todos');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
<<<<<<< HEAD
        const productosRef = collection(db, "productos");
=======
        const productosRef = collection(db, "productos"); 
>>>>>>> 9bdbed8 (primer commit)
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

<<<<<<< HEAD
  const productosFiltrados = productos.filter(p =>
=======
  const productosFiltrados = productos.filter(p => 
>>>>>>> 9bdbed8 (primer commit)
    categoryFilter === 'todos' || p.category === categoryFilter
  );

  console.log("Productos: ", productos)

  return (
<<<<<<< HEAD
    <div style={{ width: "100%" }}>
=======
    <div style={{width: "100%"}}>
>>>>>>> 9bdbed8 (primer commit)
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
<<<<<<< HEAD
            idFirebase={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            description={producto.description}
            stock={producto.stock}
            category={producto.category}
          />

=======
            image={producto.image}
            title={producto.title}
            description={producto.description}
            price={producto.price}
            category={producto.category}
            stock={producto.stock}
          />
>>>>>>> 9bdbed8 (primer commit)
        ))}
      </div>
    </div>
  );
};

export default HomePage;