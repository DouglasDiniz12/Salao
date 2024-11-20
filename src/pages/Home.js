import { useState,useEffect } from "react";
import './Home.css';



function Home() {
  

  const images = [
    '/images/studio2.jpg',
    '/images/studio3.jpg',
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
    <h1> STUDIO MARI DINIZ</h1>

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

    <section className="about-salon">
    <h1>Bem-vindo ao Studio Maria Diniz!</h1>
        <p>
          No coração do bairro Nova Esperança, em Jandira, nosso salão oferece um ambiente acolhedor e moderno, 
          dedicado a realçar a sua beleza com qualidade e sofisticação.
        </p>
        <p>
          Com uma equipe de profissionais experientes e apaixonados pelo que fazem, garantimos que cada atendimento 
          seja personalizado para atender às suas necessidades.
        </p>
        <p>
          Seja para um corte de cabelo, uma coloração impecável, tratamentos de pele ou unhas, estamos prontos 
          para proporcionar uma experiência única, com os melhores produtos e técnicas do mercado.
        </p>
        <p>
          Venha nos visitar e descubra como podemos transformar o seu visual e proporcionar momentos de bem-estar. 
        </p>
        <p className="signature">
          <strong>Studio Mariadiniz</strong> - A beleza que você merece, no bairro que você ama.
        </p>

  
    </section>


    </div>
  </div>
   
  );
}

export default Home;