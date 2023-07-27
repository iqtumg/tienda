import React from 'react';

const ProductDetails = () => {
  return (
    <div className="container mt-4">
      {/* Aquí van los detalles completos del producto */}
      <div className="row">
        <div className="col-md-6">
          <img
            src="URL_DE_LA_IMAGEN_DEL_PRODUCTO"
            alt="Nombre del producto"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Nombre del producto</h2>
          <p>Descripción del producto.</p>
          <p>Precio: Q50.00</p>
          {/* Aquí van las opciones de compra */}
          <div className="mb-3">
            <label>Talla:</label>
            <select className="form-control">
              <option>Pequeña</option>
              <option>Mediana</option>
              <option>Grande</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Color:</label>
            <select className="form-control">
              <option>Rojo</option>
              <option>Azul</option>
              <option>Verde</option>
            </select>
          </div>
          {/* Aquí va el botón para agregar al carrito */}
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
