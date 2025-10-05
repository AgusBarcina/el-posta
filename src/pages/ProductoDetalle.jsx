import React from 'react';
import { useParams } from 'react-router-dom';

const productos = [
  { id: 1, descripcion: 'Tengan en cuenta que el DF700 FLUX incluye 5 ventiladores de 120 mm, 3 de ellos ARGB. Además, incorpora la última solución de refrigeración: la plataforma FLUX, diseñada para aumentar el rendimiento de las GPU de la serie 30 más recientes. Para disfrutar de una experiencia gaming de alta gama', imagen: 'https://www.antec.com/upload/small/2HSPG1632824759.png', nombre: 'DF700', precio: 200 },
  { id: 2, descripcion: 'Unas dimensiones compactas y una alta flexibilidad son las características fundamentales de nuestro PC-Box industrial, denominado también «PC integrado (embedded PC)». La gran selección de los distintos componentes abre un amplísimo abanico de posibilidades también para este producto.', imagen: 'https://www.rose-systemtechnik.com/wp-content/uploads/2022/01/rose-desktop-industrie-pc-300x200-min.png', nombre: 'PC-Box industriales', precio: 175 },
  { id: 3, descripcion: 'Amplíe la capacidad de almacenamiento de su ordenador con los discos WD Blue, diseñados especialmente para ordenadores de sobremesa y todo en uno con diversas capacidades de almacenamiento.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XF7a2Lb60rZcO5wudXImAq-D3TVHPsq3-Q&s', nombre: 'Disco Rigido Western Digital Blue 3.5«, 6TB, SATA III, 6 Gbit/s, 5400RPM, 64MB', precio: 50 },
  { id: 4, descripcion: 'Formato de datos USB: 16 bits/eje,Velocidad de respuesta USB: 1.000 Hz (1 ms), Velocidad de respuesta inalámbrica: 1.000 Hz (1 ms), Tecnología inalámbrica: Tecnología inalámbrica LIGHTSPEED, Microprocesador: ARM de 32 bits', imagen: 'https://www.perozzi.com.ar/41253-large_default/logitech-mouse-gaming-g203-lightsync-negro.jpg', nombre: 'MOUSE LOGITECH G502 LIGHTSPEED WIRELESS', precio: 30 },
  { id: 5, descripcion: 'nos encontramos delante de un producto con un diseño atractivo y bastante robusto en cuanto a calidad de materiales, con unas medidas de 475 x 171 x 39 mm (largo, ancho y alto) y un peso de 1,500 krs (kilo y medio). Solo destacamos que es algo más estrecho porque ya no tiene las teclas de macros laterales.', imagen: 'https://www.wowchakra.com/wp-content/uploads/2022/07/WowChakraBlackWidowV3TKL-300x200.jpg', nombre: 'Teclado BlackWidow Ultimate 2016', precio: 70 },
  { id: 6, descripcion: 'Diseñado para cuidar la salud de tus ojos y así puedas pasar horas frente al mismo sin sufrir de fatiga. Calidad de imagen en HD. Diseño super delgado.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtDBf_YoJriBhb_snCmpLvIarGsa0rLMGgA&s', nombre: 'Monitor LED Samsung', precio: 80 },
  { id: 7, descripcion: 'Sumérgete en la acción con el monitor curvo Full HD de 32 pulgadas Samsung CR50. Este monitor ofrece una curvatura 1500R para una experiencia visual envolvente, tecnología FreeSync para un juego fluido, modo Juego para un rendimiento optimizado y puertos HDMI y VGA para una fácil conectividad.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15xlKtf5Sjw4kS9agOfqKc3zTwAVx_AWGpQ&s', nombre: 'SAMSUNG Monitor Full HD curvo CR50 de 32 pulgadas LC32R502FHNX', precio: 150 },
  { id: 8, descripcion: 'con componentes de ultra lujo, demuestra la búsqueda de la perfección de AORUS. AORUS proporciona una solución de refrigeración versátil para todos los componentes clave de la tarjeta gráfica. AORUS se encarga no solo de la GPU, sino también de la VRAM y los MOSFET, garantizando una operación de overclock estable y una vida útil más larga.', imagen: 'https://statics.qloud.com.ar/318/25-01-2025-10-01-04_p03195_bigimage_73860ab38e19b512.png', nombre: 'Gtx 1660 Ti Palit Dual 6gb', precio: 275 },
];

function ProductoDetalle() {
  const { id } = useParams();
  const idNum = parseInt(id, 10); 

  const producto = productos.find(p => p.id === idNum);

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} width="300" />
       <p>descripcion: {producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
}

export default ProductoDetalle;