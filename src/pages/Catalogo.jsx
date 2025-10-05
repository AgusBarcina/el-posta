import React from 'react';
import { Link } from 'react-router-dom';

function Catalogo() {
  const productos = [
    { id: 1, imagen: 'https://www.antec.com/upload/small/2HSPG1632824759.png', nombre: 'DF700', precio: 200 },
    { id: 2, imagen: 'https://www.rose-systemtechnik.com/wp-content/uploads/2022/01/rose-desktop-industrie-pc-300x200-min.png', nombre: 'PC-Box industriales', precio: 175 },
    { id: 3, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XF7a2Lb60rZcO5wudXImAq-D3TVHPsq3-Q&s', nombre: 'Disco Rigido Western Digital Blue 3.5«, 6TB, SATA III, 6 Gbit/s, 5400RPM, 64MB', precio: 50 },
    { id: 4, imagen: 'https://www.perozzi.com.ar/41253-large_default/logitech-mouse-gaming-g203-lightsync-negro.jpg', nombre: 'MOUSE LOGITECH G502 LIGHTSPEED WIRELESS', precio: 30 },
    { id: 5, imagen: 'https://www.wowchakra.com/wp-content/uploads/2022/07/WowChakraBlackWidowV3TKL-300x200.jpg', nombre: 'Teclado BlackWidow Ultimate 2016', precio: 70 },
    { id: 6, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtDBf_YoJriBhb_snCmpLvIarGsa0rLMGgA&s', nombre: 'Monitor LED Samsung', precio: 80 },
    { id: 7, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15xlKtf5Sjw4kS9agOfqKc3zTwAVx_AWGpQ&s', nombre: 'SAMSUNG Monitor Full HD curvo CR50 de 32 pulgadas LC32R502FHNX', precio: 150 },
    { id: 8, imagen: 'https://statics.qloud.com.ar/318/25-01-2025-10-01-04_p03195_bigimage_73860ab38e19b512.png', nombre: 'Gtx 1660 Ti Palit Dual 6gb', precio: 275 },
  ];

  return (
    <div style={{ paddingTop: '130px' }}>
      {productos.map(producto => (
        <div key={producto.id} style={{ marginBottom: '20px' }}>
          <h3>{producto.nombre}</h3>
          <Link to={`/producto/${producto.id}`}>
            <img src={producto.imagen} alt={producto.nombre} width="200" />
          </Link>
          <p>Precio: ${producto.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default Catalogo;