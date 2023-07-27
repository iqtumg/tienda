import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="container mt-4">
      {/* Banner promocional */}
      <div className="jumbotron">
      <div className="d-flex justify-content-center">
        <img
          src="/images/oferta/1.jpg"
          alt="Oferta 1"
          style={{ width: '300px', height: '200px', margin: '0 10px' }}
        />
        <img
          src="/images/oferta/2.jpg"
          alt="Oferta 2"
          style={{ width: '300px', height: '200px', margin: '0 10px' }}
        />
        <img
          src="/images/oferta/3.jpg"
          alt="Oferta 3"
          style={{ width: '300px', height: '200px', margin: '0 10px' }}
        />
      </div>
        <div className="caption">
          <h1>¡Gran Venta de Invierno!</h1>
          <p>Aprovecha nuestros descuentos especiales en toda la tienda.</p>
          {/* Enlace al catálogo de productos */}
          <Link to="/catalog" className="btn btn-primary">
            Ver ofertas
          </Link>
        </div>
      </div>
     

      {/* Aquí va el contenido de la página de inicio */}
      <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
       
     
      {/* Slide de imágenes */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='/images/slide/1.JPG'
            alt="Slide 1"
            style={{ maxWidth: '300px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide/2.JPG"
            alt="Slide 2"
            style={{ maxWidth: '300px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide/3.JPG"
            alt="Slide 3"
            style={{ maxWidth: '300px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='/images/slide/1.JPG'
            alt="Slide 1"
            style={{ maxWidth: '300px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='/images/slide/1.JPG'
            alt="Slide 1"
            style={{ maxWidth: '300px' }}
          />
        </Carousel.Item>
      </Carousel>
      </div>
      {/* Sección de suscripción */}
      <div className="card p-4 mt-4">
        <h3>Suscríbete para recibir noticias y promociones</h3>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Nombre:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Apellido:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Correo Electrónico:</label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Número de Teléfono:</label>
              <input type="tel" className="form-control" />
            </div>
            {/* Puedes agregar más campos del formulario aquí */}
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">
                Suscribirse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
