import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  // Ejemplo de datos de productos (puedes cambiarlo con tus datos)
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      category: 'Hombres',
      price: 50.0,
      image: '/images/productos/A.jpg',
    },
    {
      id: 2,
      name: 'Producto 2',
      category: 'Niños',
      price: 50.0,
      image: '/images/productos/2.jpg',
    },
    {
      id: 3,
      name: 'Producto 3',
      category: 'Mujeres',
      price: 50.0,
      image: '/images/productos/3.jpg',
    },
    {
      id:4 ,
      name: 'Producto 4',
      category: 'Hombres',
      price: 50.0,
      image: '/images/productos/4.jpg',
    },
    {
      id: 5,
      name: 'Producto 5',
      category: 'Niños',
      price: 50.0,
      image: '/images/productos/5.jpg',
    },
    {
      id: 6,
      name: 'Producto 6',
      category: 'Mujeres',
      price: 50.0,
      image: '/images/productos/6.jpg',
    },
    {
      id:7 ,
      name: 'Producto 7',
      category: 'Hombres',
      price: 50.0,
      image: '/images/productos/7.jpg',
    },
    {
      id: 8,
      name: 'Producto 8',
      category: 'Niños',
      price: 50.0,
      image: '/images/productos/8.jpg',
    },
    {
      id: 9,
      name: 'Producto 9',
      category: 'Mujeres',
      price: 50.0,
      image: '/images/productos/9.jpg',
    },
    
    // Agrega más productos aquí
  ];

  // Estado para controlar la visibilidad de los filtros
  const [showFilters, setShowFilters] = useState(true);

  // Filtrar productos por categoría
  const filteredProducts = showFilters ? products : products.filter(product => product.category === 'Hombres');

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Botón para mostrar/ocultar los filtros */}
        <button className="btn btn-primary" onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </button>

        {/* Botón para limpiar los filtros */}
        {showFilters && (
          <button className="btn btn-secondary" onClick={() => setShowFilters(false)}>
            Limpiar Filtros
          </button>
        )}
      </div>

      {/* Filtros */}
      {showFilters && (
        <div className="mb-4">
          <h5>Filtrar por Categoría:</h5>
          <button className="btn btn-outline-primary mx-2">Hombres</button>
          <button className="btn btn-outline-primary mx-2">Mujeres</button>
          <button className="btn btn-outline-primary mx-2">Niños</button>
        </div>
      )}

      {/* Aquí va la cuadrícula de productos con imágenes, título y precio */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Descripción del producto.</p>
                <p className="card-text">Q.{product.price}.00</p>
                {/* Enlace al detalle del producto */}
                <Link to={`/product/${product.id}`} className="btn btn-secondary">
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
