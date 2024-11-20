import React from 'react';
import './Contact.css';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (

    <div className="contact-container">
    <h1>Contato</h1>
    <p className="contact-description">
      Agende agora e transforme seu visual no Studio Mariadiniz. Estamos esperando por você!
    </p>
    
    <div className="contact-info">
      <div className="contact-item">
        <a href="https://www.instagram.com/SeuSalao" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaInstagram className="contact-icon" />
          Instagram
        </a>
      </div>

      <div className="contact-item">
        <a href="https://wa.me/5511123456789" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaWhatsapp className="contact-icon" />
          WhatsApp
        </a>
      </div>

      <div className="contact-item">
        <a href="mailto:contato@mariadiniz.com.br" className="contact-link">
          <FaEnvelope className="contact-icon" />
          Email
        </a>
      </div>
    </div>
  </div>
   
  );
}

export default Contact;