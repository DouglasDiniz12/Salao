import React from 'react';
import './Service.css';



function Services() {

  const services = [
    {
      id: 1,
      image: '/images/img5.jpg',
      title: 'Corte de Cabelo',
      description: 'Corte moderno e personalizado para cada tipo de cabelo.',
    },
    {
      id: 2,
      image: '/images/img2.jpg',
      title: 'Manicure e Pedicure',
      description: 'Cuidados especiais para suas mãos e pés.',
    },
    {
      id: 3,
      image: '/images/img1.jpg',
      title: 'Tratamento Capilar',
      description: 'Tratamentos que deixam seu cabelo saudável e brilhante.',
    },
    {
      id: 4,
      image: '/images/img4.jpg',
      title: 'Maquiagem Profissional',
      description: 'Maquiagem para todas as ocasiões, feita por especialistas.',
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;