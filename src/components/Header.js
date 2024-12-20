
import './Header.css';

function Header() {
  return (

    <header className="header-container">
    <div className="logo-container">
      <img src="/images/salao1.jpg" alt="Studio Mariadiniz" className="logo" /> {/* Logo do salão */}
    </div>

    <nav className="nav-links">
      <ul>
        <li><a href="/">Sobre nós</a></li>
        <li><a href="/services"> Agendar Serviços</a></li>
        <li><a href="/contact">Contato</a></li>
      </ul>
    </nav>
  </header>
   
  );
}

export default Header;