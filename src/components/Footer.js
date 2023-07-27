import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <p>
          © {new Date().getFullYear()} BYKOAS | Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
