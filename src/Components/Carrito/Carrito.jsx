import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // ajusta la ruta
import { useNavigate } from 'react-router-dom';
import './carrito.css';

const Carrito = () => {
  const { shopVec, removeProduct, updateQuantity } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleFinalizarPago = () => {
    const numeroCompra = 'COMP' + Date.now();
    localStorage.setItem('numeroCompra', numeroCompra);
    console.log('Número de compra guardado:', numeroCompra);
    navigate('/FinalizarCompra');
  };

  const totalPrice = shopVec.reduce(
    (sum, item) => sum + item.precio * item.cantUnits,
    0
  );

  return (
    <div className="carrito">
      <h2 className="titulo">Carrito de compras</h2>
      {shopVec.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <div className="lista-productos">
            {shopVec.map((item) => (
              <div key={item.id} className="producto">
                <img src={item.img} alt={item.titulo} />
                <div className="detalles">
                  <div className="titulo-producto">{item.titulo}</div>
                  <div className="precio">Precio: ${item.precio.toFixed(2)}</div>
                  <div className="subtotal">
                    Subtotal: ${(item.precio * item.cantUnits).toFixed(2)}
                  </div>
                  <div className="acciones">
                    <input
                      type="number"
                      min="1"
                      value={item.cantUnits}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="cantidad-input"
                    />
                    <button
                      className="btn-eliminar"
                      onClick={() => removeProduct(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1000px',
              marginTop: '30px',
            }}
          >
            <div className="precio-total">Total: ${totalPrice.toFixed(2)}</div>
            <button className="btn-finalizar" onClick={handleFinalizarPago}>
              FINALIZAR PAGO
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;