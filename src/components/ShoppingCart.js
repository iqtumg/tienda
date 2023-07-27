import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="container mt-4">
      {/* Aquí va la lista de productos seleccionados por el usuario */}
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Repite el siguiente código para cada producto en el carrito */}
          <tr>
            <td>Producto 1</td>
            <td>1</td>
            <td>Q.50.00</td>
            <td>Q.50.00</td>
            <td>
              {/* Aquí van los botones para ajustar la cantidad o eliminar productos */}
              <button className="btn btn-outline-secondary btn-sm mx-1">
                -
              </button>
              <button className="btn btn-outline-secondary btn-sm mx-1">
                +
              </button>
              <button className="btn btn-outline-danger btn-sm mx-1">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Aquí va el formulario para información de envío y pago */}
      <div className="mb-3">
        <label>Nombre:</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Dirección:</label>
        <input type="text" className="form-control" />
      </div>
      {/* Otros campos del formulario de envío y pago */}
      {/* Botón para realizar la compra */}
      <button className="btn btn-primary">Realizar compra</button>
    </div>
  );
};

export default ShoppingCart;
