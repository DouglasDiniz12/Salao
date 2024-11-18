import { useState,useEffect } from "react";
import './Home.css'

function Home() {

  const images = [
    '/images/imeg1.jpg',
    '/images/imge2.png',
    '/images/imeg4.jpg',
  ];

  
   const [currentIndex, setCurrentIndex] = useState(0);

   
   const nextSlide = () => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   };
 
   
   const prevSlide = () => {
     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
   };

   useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (

    <div className="home-container">
    <h1>Bem-vindo ao Studio Mariadiniz</h1>

    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <img
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
    </div>


    <div>

    <div className="home-container1">
    
      
      <div className="welcome-text">
        <p>Bem-vindo ao nosso salão de beleza em Jandira, no bairro Nova Esperança!</p>
        <p>
          No coração de Nova Esperança, nosso salão oferece um ambiente acolhedor e moderno, dedicado a realçar a sua beleza com qualidade e sofisticação. Com uma equipe de profissionais experientes e apaixonados pelo que fazem, garantimos que cada atendimento seja personalizado para atender às suas necessidades.
        </p>
        <p>
          Seja para um corte de cabelo, uma coloração impecável, tratamentos de pele ou unhas, estamos prontos para proporcionar uma experiência única, com os melhores produtos e técnicas do mercado.
        </p>
        <p>
          Venha nos visitar e descubra como podemos transformar o seu visual e proporcionar momentos de bem-estar.
        </p>
        <p className="studio-name">
        <h3> Studio Mariadiniz - A beleza que você merece</h3> 
        </p>
      </div>
    </div>


    </div>
  </div>
   
  );
}

export default Home;