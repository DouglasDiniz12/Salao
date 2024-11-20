import React from 'react';
import './Corte.css';



const Tratamento = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = "+55 11 994026599"; // Substitua pelo número do salão, incluindo o código do país
    const message = "Olá, gostaria de agendar um tratamento capilar. Como posso agendar?"; // Mensagem predefinida
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Abrir o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank");
  };

  
  return (
    <div className="corte-container">
      <h1 className="corte-title">Tratamento capilar</h1>
      <div className="corte-content">
        <img
          src="/images/img3.jpeg"
          alt="Corte de Cabelo"
          className="corte-image"
        />
        <div className="corte-description">
          <p>
            Transforme o seu visual com um corte de cabelo personalizado, feito
            por nossos profissionais experientes. Seja clássico, moderno ou
            despojado, estamos prontos para atender ao seu estilo.
          </p>
          <p>
            <strong>Valor:</strong> R$ 50,00
          </p>
          <button onClick={handleWhatsAppClick} className="whatsapp-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" alt="WhatsApp" width="20" height="20" />Agende Agora via whatsapp</button>
        </div>
      </div>
    </div>
  );
};

export default Tratamento;