import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light py-4">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo y enlace a la página de inicio */}
        <Link to="/" className="text-light text-decoration-none">
          <h1>TIENDA BYKOAS</h1>
        </Link>

        {/* Navbar */}
        <nav>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <Link to="/" className="text-light text-decoration-none">
                Inicio
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/catalog" className="text-light text-decoration-none">
                Catálogo
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/cart" className="text-light text-decoration-none">
                Carrito
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
