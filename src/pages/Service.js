import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';



function Services() {

  const services = [
    {
      id: 1,
      image: '/images/img5.jpg',
      title: 'Corte de Cabelo',
      description: 'Corte moderno e personalizado para cada tipo de cabelo.',
      link: '/corte-de-Cabelo',
    },
    {
      id: 2,
      image: '/images/img2.jpg',
      title: 'Manicure e Pedicure',
      description: 'Cuidados especiais para suas mãos e pés e muito mais.',
      link: '/mani-pede',
    },
    {
      id: 3,
      image: '/images/img1.jpg',
      title: 'Tratamento Capilar',
      description: 'Tratamentos que deixam seu cabelo saudável e brilhante.',
      link:'/tratamento-cap',
    },
    {
      id: 4,
      image: '/images/img4.jpg',
      title: 'Maquiagem Profissional',
      description: 'Maquiagem para todas as ocasiões, feita por especialistas.',
      link:'/maquiagem-a'
    },
  ];

  return (

    <div className="services-container">
      <h2>Serviços Disponíveis</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.link && (
              <Link to={service.link} className="service-link-button">
                agendar
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;